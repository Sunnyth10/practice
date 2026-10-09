// Initialize Lucide icons on window load
window.onload = () => {
    lucide.createIcons();
    initApp();
    // Attach event listener for closing profile menu on outside click
    document.addEventListener('click', closeProfileMenuOnOutsideClick);
};

// --- Global Constants & State ---
const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/";
const API_MODEL = "gemini-2.5-flash-preview-09-2025";

/**
 * DANGER: Do NOT expose API keys on the client-side in a real application.
 * This function is a placeholder. In a production environment, the key
 * should be stored securely on a server and accessed via an environment variable.
 * The server would then make the API call on behalf of the client.
 */
function getApiKey() {
    // In a real app, this would be an empty string.
    // For this demo, we'll keep the placeholder behavior.
    console.warn("API Key is handled insecurely on the client-side for demonstration purposes.");
    const apiKey = ""; // Canvas environment provides the key
    if (!apiKey) {
        console.error("API Key is missing. AI features will not work.");
    }
    return apiKey;
}


let currentRole = 'Patient';
// In a real application, the patient ID would come from a secure session after login.
const CURRENT_PATIENT_ID = "PID-458901"; // Hardcode Patient ID for demonstration

// --- Mock Data Store (The "Unified Data Platform") ---
const MOCK_DATA = {
    patients: [
        { id: "PID-458901", name: "Alice Johnson", age: 45, condition: "Controlled Type II Diabetes", status: "Stable", lastVisit: "2025-10-20" },
        { id: "PID-458902", name: "Robert Davis", age: 62, condition: "Post-Stroke Rehabilitation", status: "Alert", lastVisit: "2025-11-01" }
    ],
    appointments: [
        { patientId: "PID-458901", date: "Nov 25, 2025", time: "10:00 AM", type: "Annual Physical", provider: "Dr. L. Chen, General Clinic", location: "Central Hospital" },
        { patientId: "PID-458901", date: "Dec 10, 2025", time: "2:30 PM", type: "Cardiology Review", provider: "Dr. S. Khan, Specialist Center", location: "Specialist Center" }
    ],
    medications: [
        { patientId: "PID-458901", name: "Metformin 500mg", dosage: "2x Daily", refillDue: "7 days", status: "On Track" },
        { patientId: "PID-458901", name: "Amlodipine 5mg", dosage: "1x Daily", refillDue: "Refill Now", status: "Urgent" }
    ],
    testResults: [
        { patientId: "PID-458901", test: "Hemoglobin A1c", value: "6.8%", date: "2025-10-15", lab: "Central Diagnostic Lab" },
        { patientId: "PID-458901", test: "Lipid Panel", value: "LDL: 110 mg/dL", date: "2025-08-01", lab: "Westside Clinic Lab" }
    ],
    insights: [
        { type: "Critical Alert", patientId: "PID-458902", message: "Patient Robert Davis missed physical therapy session. High risk of regression. Follow up immediately.", source: "Rehab Schedule API" },
        { type: "Clinical Suggestion", patientId: "PID-458901", message: "Alice Johnson's A1c is stable but borderline. Suggest reinforcing diet compliance before escalating medication.", source: "AI Clinical Model" }
    ]
};

// --- Utility Functions ---

/** Replaces system alert() with a custom, non-blocking modal UI. */
const showMessage = (title, message, isError = false) => {
    const msgEl = document.getElementById('custom-message-box');
    if (!msgEl) return; // Should not happen if the HTML is correct
    
    const modalContent = msgEl.querySelector('div');
    document.getElementById('msg-title').textContent = title;
    document.getElementById('msg-content').innerHTML = message;
    
    // Update styles based on error status
    if (isError) {
        document.getElementById('msg-title').className = 'text-xl font-bold mb-2 text-red-600';
        modalContent.classList.remove('border-indigo-600');
        modalContent.classList.add('border-red-600');
    } else {
        document.getElementById('msg-title').className = 'text-xl font-bold mb-2 text-indigo-600';
        modalContent.classList.add('border-indigo-600');
        modalContent.classList.remove('border-red-600');
    }

    // Show the modal
    msgEl.classList.remove('opacity-0', 'pointer-events-none');
    msgEl.classList.add('opacity-100');
};

/** Executes the Gemini API call with exponential backoff. */
const callGeminiAPI = async (prompt, systemInstruction = null, useGrounding = false, retries = 3, delay = 1000) => {
    const apiKey = getApiKey();
    if (!apiKey) {
        throw new Error("API Key is not available. Cannot make API call.");
    }
    const url = `${API_URL}${API_MODEL}:generateContent?key=${apiKey}`;
    
    const payload = {
        contents: [{ parts: [{ text: prompt }] }],
    };

    if (systemInstruction) {
        payload.systemInstruction = { parts: [{ text: systemInstruction }] };
    }

    if (useGrounding) {
        payload.tools = [{ "google_search": {} }];
    }

    const headers = { 'Content-Type': 'application/json' };

    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                const result = await response.json();
                const text = result.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated.";
                
                let sources = [];
                const groundingMetadata = result.candidates?.[0]?.groundingMetadata;
                if (groundingMetadata && groundingMetadata.groundingAttributions) {
                    sources = groundingMetadata.groundingAttributions
                        .map(attr => ({
                            uri: attr.web?.uri,
                            title: attr.web?.title,
                        }))
                        .filter(source => source.uri && source.title);
                }
                
                return { text, sources };
            } else if (response.status === 429 && i < retries - 1) {
                await new Promise(resolve => setTimeout(resolve, delay));
                delay *= 2; 
            } else {
                const errorBody = await response.text();
                throw new Error(`API Error: ${response.status} - ${errorBody}`);
            }
        } catch (error) {
            if (i === retries - 1) throw error;
            await new Promise(resolve => setTimeout(resolve, delay));
            delay *= 2;
        }
    }
    throw new Error("API request failed after multiple retries.");
};

/** Fetches unified data based on the current role. */
const fetchData = (role) => {
    return new Promise(resolve => {
        setTimeout(() => { // Simulate API latency
            if (role === 'Patient') {
                const patientData = {
                    profile: MOCK_DATA.patients.find(p => p.id === CURRENT_PATIENT_ID),
                    appointments: MOCK_DATA.appointments.filter(a => a.patientId === CURRENT_PATIENT_ID),
                    medications: MOCK_DATA.medications.filter(m => m.patientId === CURRENT_PATIENT_ID),
                    testResults: MOCK_DATA.testResults.filter(t => t.patientId === CURRENT_PATIENT_ID)
                };
                resolve(patientData);
            } else if (role === 'Provider') {
                resolve({
                    patients: MOCK_DATA.patients,
                    insights: MOCK_DATA.insights
                });
            }
        }, 300);
    });
};

/** Toggles the profile dropdown menu visibility. */
const toggleProfileMenu = () => {
    const menu = document.getElementById('profile-menu');
    menu.classList.toggle('hidden');
};

/** Closes the profile menu if the click is outside the menu or button. */
const closeProfileMenuOnOutsideClick = (event) => {
    const menu = document.getElementById('profile-menu');
    const button = document.getElementById('profile-button');
    if (menu && !menu.classList.contains('hidden')) {
        // Check if the click occurred outside the menu and the button
        if (!menu.contains(event.target) && !button.contains(event.target)) {
            menu.classList.add('hidden');
        }
    }
};

// --- LLM Feature Functions ---

/** Patient Feature: Generates simplified medication explanation and interaction check. */
const getMedicationExplanation = async (medications, profile) => {
    const medList = medications.map(m => `${m.name} (${m.dosage})`).join(' and ');
    
    // Show loading state
    showMessage("Generating Medication Information ✨", "Please wait while our AI assistant fetches and simplifies information about your current medications and potential interactions...", false);
    
    const systemInstruction = `You are a friendly, compassionate, and highly simplified medical information assistant for a patient. Your goal is to explain the patient's current medication regimen and common interactions in clear, non-technical, easy-to-understand language (8th-grade level). Do not provide medical advice. Structure your response into two sections: 1) What these medications do (briefly for each), and 2) Common things to avoid (focusing on food, supplements, or common over-the-counter drugs). Always state that this is for informational purposes only and they must consult their doctor.`;
    
    const prompt = `The patient, ${profile.name} (age ${profile.age}), is currently taking: ${medList}. Please provide a simple explanation of what these medicines do and list any common, non-critical food or drug interactions they should be aware of.`;

    try {
        const result = await callGeminiAPI(prompt, systemInstruction, true); // Use grounding
        
        let htmlResponse = `<p class="mb-4">${result.text.replace(/\n/g, '<br>')}</p>`;

        if (result.sources.length > 0) {
            htmlResponse += `<h4 class="font-semibold text-sm mt-4">Sources (AI Grounding):</h4>`;
            htmlResponse += `<ul class="list-disc pl-5 text-xs text-gray-600 space-y-1">`;
            result.sources.slice(0, 3).forEach(s => {
                htmlResponse += `<li><a href="${s.uri}" target="_blank" class="text-blue-500 hover:text-blue-700">${s.title}</a></li>`;
            });
            htmlResponse += `</ul>`;
        }

        showMessage("Your Medication Guide ✨", htmlResponse, false);
        
    } catch (error) {
        showMessage("AI Error", `Failed to get medical information. Please check the console for details. <br><strong>Error:</strong> ${error.message}`, true);
        console.error("Gemini API call failed:", error);
    }
};

/** Provider Feature: Generates a concise clinical summary for follow-up. */
const generateSummary = async (patientData) => {
    const { profile, medications, testResults } = patientData;
    
    // Aggregate data points
    const urgentMeds = medications.filter(m => m.status === 'Urgent').map(m => m.name).join(', ') || 'None';
    const recentA1c = testResults.find(t => t.test === 'Hemoglobin A1c')?.value || 'N/A';
    
    // Show loading state
    showMessage("Generating Clinical Summary ✨", `Creating a focused follow-up summary for ${profile.name}...`, false);

    const systemInstruction = `You are an AI Clinical Assistant for a healthcare provider. Your task is to generate a concise, actionable follow-up summary for the patient. The summary must be a single, short paragraph (max 5 sentences) and strictly focus on the patient's key status, recent metrics, and immediate outstanding actions.`;
    
    const prompt = `Patient: ${profile.name}, Age: ${profile.age}, Condition: ${profile.condition}. Key A1c Result: ${recentA1c}. Urgent Medications needing refill: ${urgentMeds}. Last Visit: ${profile.lastVisit}. Generate a follow-up summary.`;

    try {
        const result = await callGeminiAPI(prompt, systemInstruction, false); // No grounding needed, data is internal
        
        const htmlResponse = `
            <p class="font-semibold mb-3 text-lg">${profile.name}'s Follow-up Brief:</p>
            <p>${result.text.replace(/\n/g, '<br>')}</p>
        `;

        showMessage("Follow-up Brief Generated ✨", htmlResponse, false);
        
    } catch (error) {
        showMessage("AI Error", `Failed to generate follow-up summary. Please check the console for details. <br><strong>Error:</strong> ${error.message}`, true);
        console.error("Gemini API call failed:", error);
    }
};


// --- Dashboard Rendering Functions ---

/** Renders the Patient-facing dashboard (HealthHub). */
const renderPatientDashboard = (data) => {
    const container = document.getElementById('dashboard-container');
    if (!data.profile) {
        container.innerHTML = `<div class="text-center text-red-500">Patient data not found.</div>`;
        return;
    }

    const { profile, appointments, medications, testResults } = data;
    const patientInitial = profile.name ? profile.name[0].toUpperCase() : 'U';

    container.innerHTML = `
        <section class="bg-white p-6 rounded-xl shadow-2xl mb-8">
            <div class="flex items-center justify-between border-b pb-4 mb-4">
                <h2 class="text-3xl font-semibold text-indigo-700">HealthHub: My Unified Record</h2>
                
                <!-- Clickable Profile Icon with Dropdown Menu -->
                <div class="relative z-10" id="profile-container">
                    <button id="profile-button" onclick="toggleProfileMenu()"
                        class="w-10 h-10 rounded-full bg-indigo-500 hover:bg-indigo-700 text-white font-bold text-lg flex items-center justify-center shadow-lg transition duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        ${patientInitial}
                    </button>
                    
                    <!-- Dropdown Menu -->
                    <div id="profile-menu" class="hidden absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100">
                        <div class="px-4 py-3">
                            <p class="text-sm">Signed in as</p>
                            <p class="text-sm font-medium text-gray-900 truncate">${profile.name}</p>
                            <p class="text-xs text-gray-500">ID: ${profile.id}</p>
                        </div>
                        <div class="py-1">
                            <a href="#" class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onclick="console.log('Navigating to Edit Profile')">
                                <i data-lucide="settings" class="w-4 h-4 mr-2"></i>Edit Your Profile
                            </a>
                            <a href="#" class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onclick="showMessage('Patient Identifier', 'Your unique Patient ID is: ${profile.id}')">
                                <i data-lucide="fingerprint" class="w-4 h-4 mr-2"></i>View Patient ID
                            </a>
                            <a href="#" class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onclick="console.log('Navigating to Consent Management')">
                                <i data-lucide="lock" class="w-4 h-4 mr-2"></i>Consent Management
                            </a>
                        </div>
                        <div class="py-1">
                            <a href="#" class="flex items-center px-4 py-2 text-sm text-red-700 hover:bg-red-50" onclick="console.log('Logging out')">
                                <i data-lucide="log-out" class="w-4 h-4 mr-2"></i>Sign out
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Profile and Vitals Summary -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <i data-lucide="user" class="w-6 h-6 text-blue-600 mb-2"></i>
                    <p class="text-gray-600 text-sm">Patient Name</p>
                    <p class="text-lg font-bold">${profile.name}</p>
                </div>
                <div class="bg-red-50 p-4 rounded-lg border border-red-200">
                    <i data-lucide="heart" class="w-6 h-6 text-red-600 mb-2"></i>
                    <p class="text-gray-600 text-sm">Key Condition</p>
                    <p class="text-lg font-bold">${profile.condition}</p>
                </div>
                <div class="bg-green-50 p-4 rounded-lg border border-green-200">
                    <i data-lucide="check-circle" class="w-6 h-6 text-green-600 mb-2"></i>
                    <p class="text-gray-600 text-sm">Data Ownership</p>
                    <p class="text-lg font-bold text-green-700">Access Granted</p>
                </div>
            </div>

            <!-- Appointments and Meds -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                        <i data-lucide="calendar-check" class="w-5 h-5 mr-2"></i>Upcoming Care
                    </h3>
                    <div class="space-y-3">
                        ${appointments.map(app => `
                            <div class="bg-gray-50 p-4 rounded-lg shadow-inner flex justify-between items-center">
                                <div>
                                    <p class="font-semibold">${app.type}</p>
                                    <p class="text-sm text-gray-600">${app.date} @ ${app.time}</p>
                                    <p class="text-xs text-indigo-500">${app.provider}</p>
                                </div>
                                <button class="bg-indigo-500 hover:bg-indigo-700 text-white text-sm py-1 px-3 rounded transition">Manage</button>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-4 flex items-center justify-between">
                        <div class="flex items-center">
                            <i data-lucide="pill" class="w-5 h-5 mr-2"></i>Current Medications
                        </div>
                        <!-- GEMINI LLM Feature for Patient View -->
                        <button onclick="getMedicationExplanation(MOCK_DATA.medications.filter(m => m.patientId === CURRENT_PATIENT_ID), MOCK_DATA.patients.find(p => p.id === CURRENT_PATIENT_ID))" 
                            class="text-xs bg-purple-500 hover:bg-purple-600 text-white font-semibold py-1 px-3 rounded-full transition duration-150 shadow-md flex items-center">
                            Medication Explainer ✨
                        </button>
                    </h3>
                    <div class="space-y-3">
                        ${medications.map(med => `
                            <div class="p-4 rounded-lg shadow-inner flex justify-between items-center ${med.status === 'Urgent' ? 'bg-red-100 border border-red-400' : 'bg-gray-50'}">
                                <div>
                                    <p class="font-semibold">${med.name}</p>
                                    <p class="text-sm text-gray-600">${med.dosage}</p>
                                    <p class="text-xs ${med.status === 'Urgent' ? 'text-red-600 font-bold' : 'text-green-600'}">${med.refillDue}</p>
                                </div>
                                <button class="bg-green-500 hover:bg-green-700 text-white text-sm py-1 px-3 rounded transition">Refill</button>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <!-- Test Results -->
            <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-4 flex items-center border-t pt-6">
                <i data-lucide="clipboard-list" class="w-5 h-5 mr-2"></i>Latest Test Results (Unified)
            </h3>
            <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Test Name</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Result</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source Lab</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        ${testResults.map(res => `
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${res.test}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${res.value}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${res.date}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-indigo-600">${res.lab}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>

        </section>
    `;
    lucide.createIcons();
    // Re-attach the click handler to the dynamically created button
    document.getElementById('profile-button').addEventListener('click', toggleProfileMenu);
};

/** Renders the Provider-facing dashboard (HealthLink). */
const renderProviderDashboard = (data) => {
    const container = document.getElementById('dashboard-container');
    
    // Get data for Alice Johnson (PID-458901) to pass to summary generator
    const targetPatientData = {
        profile: MOCK_DATA.patients.find(p => p.id === CURRENT_PATIENT_ID),
        medications: MOCK_DATA.medications.filter(m => m.patientId === CURRENT_PATIENT_ID),
        testResults: MOCK_DATA.testResults.filter(t => t.patientId === CURRENT_PATIENT_ID)
    };


    container.innerHTML = `
        <h2 class="text-3xl font-bold text-indigo-800 mb-6">Provider Dashboard: Clinical Command Center</h2>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">

            <!-- Patients List Card -->
            <div class="lg:col-span-1 bg-white p-6 rounded-xl shadow-2xl">
                <h3 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <i data-lucide="users" class="w-5 h-5 mr-2 text-indigo-600"></i>My Active Patient Load
                </h3>
                <!-- GEMINI LLM Feature Button for Provider View -->
                <button onclick="generateSummary(targetPatientData)"
                    class="mb-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-150 shadow-md flex items-center justify-center">
                    Generate Follow-up Summary ✨
                </button>
                <div class="space-y-4">
                    ${data.patients.map(p => {
                        const statusClass = p.status === 'Alert' ? 'bg-red-500' : 'bg-green-500';
                        return `
                            <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg shadow-sm">
                                <div>
                                    <p class="font-semibold text-gray-900">${p.name}</p>
                                    <p class="text-xs text-gray-500">ID: ${p.id} | Last Visit: ${p.lastVisit}</p>
                                </div>
                                <span class="text-xs font-bold text-white px-3 py-1 rounded-full ${statusClass}">${p.status}</span>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>

            <!-- AI Insights and Actions Card -->
            <div class="lg:col-span-2 bg-white p-6 rounded-xl shadow-2xl">
                <h3 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <i data-lucide="brain" class="w-5 h-5 mr-2 text-blue-600"></i>AI-Driven Clinical Insights
                </h3>
                <div id="insight-list" class="space-y-4 h-96 overflow-y-auto pr-2">
                    ${data.insights.map(insight => {
                        const typeIcon = insight.type === 'Critical Alert' ? 'alert-triangle' : 'lightbulb';
                        const typeClass = insight.type === 'Critical Alert' ? 'bg-red-50 border-red-500 text-red-800' : 'bg-blue-50 border-blue-500 text-blue-800';
                        return `
                            <div class="p-4 rounded-lg border-l-4 ${typeClass} shadow-md">
                                <div class="flex items-start justify-between">
                                    <div class="flex items-center">
                                        <i data-lucide="${typeIcon}" class="w-5 h-5 mr-2"></i>
                                        <p class="font-bold">${insight.type} (${insight.patientId})</p>
                                    </div>
                                    <button class="text-xs font-semibold text-indigo-600 hover:underline">Take Action</button>
                                </div>
                                <p class="mt-2 text-sm">${insight.message}</p>
                                <p class="text-xs text-gray-500 mt-1">Source: ${insight.source}</p>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        </div>

        <!-- Metrics Placeholder -->
        <div class="mt-6 p-6 bg-white rounded-xl shadow-2xl">
            <h3 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <i data-lucide="bar-chart-2" class="w-5 h-5 mr-2 text-green-600"></i>System-Wide Metrics
            </h3>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div class="p-3 bg-green-50 rounded-lg">
                    <p class="text-3xl font-bold text-green-700">98%</p>
                    <p class="text-sm text-gray-600">Data Unification Rate</p>
                </div>
                <div class="p-3 bg-indigo-50 rounded-lg">
                    <p class="text-3xl font-bold text-indigo-700">42</p>
                    <p class="text-sm text-gray-600">Active Providers</p>
                </div>
                <div class="p-3 bg-yellow-50 rounded-lg">
                    <p class="text-3xl font-bold text-yellow-700">1.2M</p>
                    <p class="text-sm text-gray-600">Records Exchanged</p>
                </div>
                <div class="p-3 bg-red-50 rounded-lg">
                    <p class="text-3xl font-bold text-red-700">1</p>
                    <p class="text-sm text-gray-600">Security Incident (Last 30D)</p>
                </div>
            </div>
        </div>
    `;
    lucide.createIcons();
};

// --- Main Application Flow ---

const updateUI = async (role) => {
    const statusMsg = document.getElementById('status-message');
    const dashboardContainer = document.getElementById('dashboard-container');
    const roleDisplay = document.getElementById('role-display');
    const toggleBtn = document.getElementById('role-toggle-btn');

    dashboardContainer.innerHTML = '';
    statusMsg.classList.remove('hidden');

    // Ensure profile menu is closed when switching views
    const menu = document.getElementById('profile-menu');
    if (menu && !menu.classList.contains('hidden')) {
        menu.classList.add('hidden');
    }


    try {
        const data = await fetchData(role);

        if (role === 'Patient') {
            renderPatientDashboard(data);
            roleDisplay.textContent = 'Patient';
            toggleBtn.textContent = 'Switch to Provider View';
        } else {
            renderProviderDashboard(data);
            roleDisplay.textContent = 'Provider';
            toggleBtn.textContent = 'Switch to Patient View';
        }
        
    } catch (error) {
        console.error("Error rendering dashboard:", error);
        statusMsg.className = 'bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg';
        statusMsg.innerHTML = '<p class="font-bold">Error!</p><p>Could not load platform data.</p>';
    } finally {
        statusMsg.classList.add('hidden');
    }
};

const toggleRole = () => {
    currentRole = (currentRole === 'Patient' ? 'Provider' : 'Patient');
    updateUI(currentRole);
};

const initApp = () => {
    document.getElementById('role-toggle-btn').addEventListener('click', toggleRole);
    updateUI(currentRole);
};