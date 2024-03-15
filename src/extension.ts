// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { GenericFile } from './generic_file';

function generateReactFC(contextMenuPath: string, functionComponentName: string) {
	const folderPath = path.join(contextMenuPath, functionComponentName);
	if (!fs.existsSync(folderPath)) {
		fs.mkdirSync(folderPath);
		fs.writeFileSync(path.join(folderPath, `${functionComponentName}.tsx`), GenericFile.getGenericTsx(functionComponentName));
		fs.writeFileSync(path.join(folderPath, `${functionComponentName}.css`), '');
	}
}

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('reactfc-generator.generateReactFCFolder', async (uri: vscode.Uri) => {
		const functionComponentName = await vscode.window.showInputBox({ prompt: 'Enter a name for the FunctionComponent' });
		if (functionComponentName && uri) {
			const contextMenuPath = uri.fsPath;
			generateReactFC(contextMenuPath, functionComponentName);
			vscode.window.showInformationMessage(`${functionComponentName} folder and files created.`);
		}
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() { }
