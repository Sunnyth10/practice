#!/usr/bin/env Rscript
# Plot per-treatment values (means + sample points) and save figure.

groups <- c("T1", "T2", "T3", "T4", "Control")
concentrations <- c(0.5, 1.0, 1.5, 2.0, 0.5)

# Three replicates per group (taken from the attachment table)
samples <- matrix(c(
  2.8, 2.1, 1.8,
  3.2, 2.8, 1.8,
  3.08, 1.82, 2.91,
  3.2, 3.8, 2.1,
  0.5, 0.8, 1.5
), nrow = 5, byrow = TRUE)

means <- rowMeans(samples)
stds <- apply(samples, 1, sd) # sample standard deviation

# Labels that include concentration
xlabels <- paste0(groups, "\n(", concentrations, " mM)")

out_file <- "growth_by_treatment_R.png"
png(out_file, width = 900, height = 500, res = 150)
par(mar = c(6, 5, 4, 2) + 0.1)

# Barplot of means (we draw labels separately to allow multi-line labels)
bp <- barplot(means,
              names.arg = rep("", length(means)),
              ylim = c(0, max(means + stds) * 1.2),
              col = rgb(0.2, 0.4, 0.8, 0.85),
              main = "Treatment responses — means with sample points",
              ylab = "Response",
              xlab = "Treatment (concentration)")

# Add error bars (mean ± sd)
arrows(x0 = bp, y0 = means - stds, x1 = bp, y1 = means + stds,
       angle = 90, code = 3, length = 0.08, lwd = 1.5)

# Overlay individual sample points with slight horizontal jitter
set.seed(42)
for (i in seq_len(nrow(samples))) {
  xj <- bp[i] + runif(ncol(samples), -0.12, 0.12)
  points(xj, samples[i, ], pch = 21, bg = "orange", col = "black")
}

# Draw x-axis labels (multi-line)
mtext(side = 1, at = bp, line = 2.5, text = xlabels)

# Add a horizontal grid for readability
abline(h = pretty(c(0, max(means + stds) * 1.2)), col = "#DDDDDD", lty = "dashed")

dev.off()

cat("Plot saved to:", out_file, "\n\n")
cat(sprintf("%-6s  %-13s  %-6s  %-6s\n", "Group", "Concentration", "Mean", "SD"))
for (i in seq_along(groups)) {
  cat(sprintf("%-6s  %13.2f  %6.3f  %6.3f\n", groups[i], concentrations[i], means[i], stds[i]))
}
