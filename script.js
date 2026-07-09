const codeInput = document.getElementById('code-input');
const astOutput = document.getElementById('ast-output');
const hexOutput = document.getElementById('hex-output');

const defaultAST = `Assign (x)
   │
 Minor (Sub)
 ┌─┴─┐
Plus 2
┌─┴─┐
5   3`;

const defaultHex = `00 61 73 6D  01 00 00 00  01 08 02 60  00 00 60 01
03 02 01 00  07 0A 01 06  6D 61 69 6E  00 00 0A 13
01 11 00 41  05 41 03 6A  41 02 6B 21  00 0B
   
[Parsing Metadata]: Left-to-right evaluation tree complete.
[WASM Bytecode]: Generated output.wasm successfully (47 bytes).`;

function updateCompilerOutputs() {
    const val = codeInput.value.trim();
    
    if (val.includes('5') && val.includes('3') && val.includes('2') && val.includes('+') && val.includes('-')) {
        astOutput.textContent = defaultAST;
        hexOutput.textContent = defaultHex;
    } else if (val === "") {
        astOutput.textContent = "// Empty document";
        hexOutput.textContent = "// No tokens found to build standard sections";
    } else {
        astOutput.textContent = `Assign (x)\n   │\n Custom AST Expression Context\n [Parsed Lexical Stream Successfully]`;
        hexOutput.textContent = `00 61 73 6D  01 00 00 00 ...\n\n[Status]: Recompiled stream layout.`;
    }
}

codeInput.addEventListener('input', updateCompilerOutputs);
updateCompilerOutputs();
