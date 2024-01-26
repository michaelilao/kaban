import * as vscode from 'vscode';
import { output, getWorkspacePath } from './utils';


const path = "/.kaban";
async function newKabanBoard(){

    // Check if in an actual working directory 
    const workingDirectory = getWorkspacePath();
    if(!workingDirectory){
        vscode.window.showErrorMessage("Please open a project or folder");
        return;
    }

    // Get kabans folder, create it if it does not exist
    const kabanDirectory = vscode.Uri.file(workingDirectory+path);
    try {
        await vscode.workspace.fs.readDirectory(kabanDirectory);
    } catch(err){
        output.append(`Creating kaban folder`);
        await vscode.workspace.fs.createDirectory(kabanDirectory);
    }

    // Ask for Kaban name
    const kabanName = await vscode.window.showInputBox({
        prompt: `What do you want to name your board`,
        ignoreFocusOut: true,
        valueSelection: [-1, -1]
    });


    const encoder = new TextEncoder();

    // File path and content for the kaban file
    const kabanFileName = vscode.Uri.file(`${workingDirectory}${path}/${kabanName}.json`);
    const contents = encoder.encode(JSON.stringify({ test: "hi" }));

    //Check if it exists then write it, else throw an error saying it exists
    vscode.workspace.fs.writeFile(kabanFileName, contents);
}

export { newKabanBoard };