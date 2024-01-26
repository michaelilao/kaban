import * as vscode from 'vscode';

const output = vscode.window.createOutputChannel("kaban", {log: true});
output.show();


function getWorkspacePath(){

    const workspaceFolders = vscode?.workspace?.workspaceFolders;
    if(!workspaceFolders || workspaceFolders?.length === 0) {return false;}
    if(!workspaceFolders[0]?.uri?.fsPath) {return false;}
    return workspaceFolders[0].uri.fsPath;


}
export { output, getWorkspacePath};