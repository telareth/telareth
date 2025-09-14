.PHONY: scripts install-node purge-node install-pm2 install-clis reset-node reset-builds start-mp2

scripts:
	@echo "Making all .sh files in scripts/ executable..."
	find scripts -name "*.sh" -exec chmod +x {} +
	@echo "Done."

install-node: scripts
	@echo "Running install-node.sh..."
	chmod +x scripts/install-node.sh
	./scripts/install-node.sh

purge-node: scripts
	@echo "Running purge-node.sh..."
	chmod +x scripts/purge-node.sh
	./scripts/purge-node.sh

install-pm2:
	@echo "Running install-pm2.sh..."
	chmod +x scripts/install-pm2.sh
	./scripts/install-pm2.sh

install-clis:
	@echo "Installing telareth cli"
	pnpm install -g @telareth/cli@latest nx lefthook prettier eslint

reset-node:
	@echo "Deleting all node_modules directories"
	find . -name "node_modules" -type d -prune -exec rm -rf "{}" +

reset-builds:
	@echo "Deleting all node_modules directories"
	find . -name "build" -type d -prune -exec rm -rf "{}" +

start-pm2:
	pnpm nx run @telareth/sdk:start:pm2
