.PHONY: scripts install-node purge-node install-pm2 install-clis reset-node reset-builds start-pm2 reload-pm2

# Make all scripts executable
scripts:
	@echo "[INFO] Making all .sh files in scripts/ executable..."
	find scripts -type f -name "*.sh" -exec chmod +x {} +

# Install Node, NVM, PNPM
install-node: scripts
	@echo "[INFO] Running install-node.sh..."
	./scripts/install-node.sh

# Purge Node, NVM, PNPM, Yarn, Bun
purge-node: scripts
	@echo "[INFO] Running purge-node.sh..."
	./scripts/purge-node.sh

# Install PM2 and its modules
install-pm2:
	@echo "[INFO] Running install-pm2.sh..."
	./scripts/install-pm2.sh

# Install global CLIs
install-clis:
	@echo "[INFO] Installing Telareth CLI and tooling..."
	npm install -g @telareth/cli@latest nx lefthook prettier eslint

# Clean node_modules
reset-node:
	@echo "[INFO] Deleting all node_modules directories..."
	find . -type d -name "node_modules" -prune -exec rm -rf {} +

# Clean build directories
reset-builds:
	@echo "[INFO] Deleting all build directories..."
	find . -type d -name "build" -prune -exec rm -rf {} +

# Start PM2 processes
start-pm2:
	@echo "[INFO] Starting PM2 applications..."
	nx run @telareth/sdk:start:pm2

# Reload PM2 processes
reload-pm2:
	@echo "[INFO] Reloading PM2 applications..."
	nx run @telareth/sdk:reload:pm2
