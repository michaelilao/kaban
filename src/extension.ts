import * as vscode from 'vscode';
import * as fs from "fs";
import { output, getWorkspacePath } from './utils';
import { newKabanBoard } from "./kaban";

export function activate(context: vscode.ExtensionContext) {
	output.clear();
	let disposable = vscode.commands.registerCommand('kaban.newBoard', async () => {
		await newKabanBoard();
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
