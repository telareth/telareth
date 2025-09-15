.PHONY: install-g-deps setup-cz setup-prettier setup-eslint setup-lefthook update-tools install-pm2

install-g-deps:
	@echo "[INFO] Installing global packages"
	npm i -g nx eslint prettier lefthook commitlint commitizen

setup-cz:
	chmod +x scripts/setup-cz.sh
	./scripts/setup-cz.sh

setup-prettier:
	chmod +x scripts/setup-prettier.sh
	./scripts/setup-prettier.sh

setup-eslint:
	chmod +x scripts/setup-eslint.sh
	./scripts/setup-eslint.sh

setup-lefthook:
	chmod +x scripts/setup-lefthook.sh
	./scripts/setup-lefthook.sh

update-tools:
	chmod +x ./scripts/update-tools.sh
	./scripts/update-tools.sh

install-pm2:
	chmod +x ./scripts/install-pm2.sh
	./scripts/install-pm2.sh
