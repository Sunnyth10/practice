
"""Plot per-treatment values (means + sample points) and save figure.

Data taken from the provided attachment: three replicates per treatment
for treatments 1-4 and a control.
"""
import numpy as np
import matplotlib.pyplot as plt

def main():
	groups = ["T1", "T2", "T3", "T4", "Control"]
	concentrations = [0.5, 1.0, 1.5, 2.0, 0.5]

	# Three replicates per group (taken from the attachment table)
	samples = [
		[2.8, 2.1, 1.8],    # T1
		[3.2, 2.8, 1.8],    # T2
		[3.08, 1.82, 2.91], # T3
		[3.2, 3.8, 2.1],    # T4
		[0.5, 0.8, 1.5],    # Control
	]

	samples = np.array(samples)
	means = samples.mean(axis=1)
	# use sample standard deviation (ddof=1)
	stds = samples.std(axis=1, ddof=1)

	x = np.arange(len(groups))

	plt.figure(figsize=(9,5))

	# Bar plot for means with error bars (std)
	plt.bar(x, means, yerr=stds, capsize=6, color='tab:blue', alpha=0.85, label='Mean ± SD')

	# Overlay individual sample points (with slight horizontal jitter)
	rng = np.random.default_rng(seed=42)
	for i, yvals in enumerate(samples):
		jitter = rng.uniform(-0.12, 0.12, size=len(yvals))
		plt.scatter(np.full(len(yvals), x[i]) + jitter, yvals, color='tab:orange', zorder=5)

	# X-axis labels include concentrations for clarity
	xticks = [f"{g}\n({c} mM)" for g, c in zip(groups, concentrations)]
	plt.xticks(x, xticks)

	plt.xlabel("Treatment (concentration)")
	plt.ylabel("Response")
	plt.title("Treatment responses — means with sample points")
	plt.grid(axis='y', linestyle='--', alpha=0.5)
	plt.legend()
	plt.tight_layout()

	out_file = "growth_by_treatment.png"
	plt.savefig(out_file, dpi=150)
	print(f"Plot saved to: {out_file}")

	# Print a small table of computed stats
	print("\nGroup  Concentration  Mean    SD")
	for g, c, m, s in zip(groups, concentrations, means, stds):
		print(f"{g:6}  {c:13.2f}  {m:6.3f}  {s:6.3f}")


if __name__ == "__main__":
	main()


# Time (hours) and optical density (OD600) measurements
Treatment = "Control"
time = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
od600 = [0.1, 0.15, 0.25, 0.4, 0.6, 0.85, 1.2, 1.5, 1.8, 2.0, 2.1]              

plt.figure(figsize=(7,4))
plt.plot(time, od600, marker='s', color='tab:blue', linewidth=2, label='OD600')
plt.scatter(time, od600, color='tab:orange')
plt.xlabel("Time (hours)")
plt.ylabel("Optical density (OD600)")
plt.title("Bacterial Growth Curve")
plt.grid(True, linestyle='--', alpha=0.6)
plt.legend()
plt.tight_layout()
plt.show()