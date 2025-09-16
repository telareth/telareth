.PHONY: install-golang setup-vscode-exts setup-cz setup-prettier setup-eslint setup-lefthook update-tools install-pm2 safe-build

install-golang:
	chmod +x ./scripts/install-golang.sh
	./scripts/install-golang.sh --run -y

setup-vscode-exts:
	chmod +x ./scripts/setup-vscode-exts.sh
	./scripts/setup-vscode-exts.sh --run -y

setup-cz:
	chmod +x scripts/setup-cz.sh
	./scripts/setup-cz.sh --run --yes

setup-prettier:
	chmod +x scripts/setup-prettier.sh
	./scripts/setup-prettier.sh --run --yes

setup-eslint:
	chmod +x scripts/setup-eslint.sh
	./scripts/setup-eslint.sh --run --yes

setup-lefthook:
	chmod +x scripts/setup-lefthook.sh
	./scripts/setup-lefthook.sh --run --yes

update-tools:
	chmod +x ./scripts/update-tools.sh
	./scripts/update-tools.sh --run --yes

install-pm2:
	chmod +x ./scripts/install-pm2.sh
	./scripts/install-pm2.sh --run --yes

safe-build:
	chmod +x ./scripts/safe-build.sh
	./scripts/safe-build.sh --run --yes
