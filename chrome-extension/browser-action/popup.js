import transformToMarkdownFormat from '../transformToMarkdownFormat.js';

const pasteTarget = document.getElementById('input');
const output = document.getElementById('output');

pasteTarget.addEventListener('paste', evt => {
	const containsHtml = Array.from(evt.clipboardData.items).some(item => item.type === 'text/html');
	if (!containsHtml) {
		evt.preventDefault();
		output.placeholder = 'No html data';
	}
});

pasteTarget.contentEditable = true;
pasteTarget.focus();
document.execCommand('Paste');
pasteTarget.contentEditable = false;

if (pasteTarget.innerText) {
	const markdownText = transformToMarkdownFormat(pasteTarget);

	output.value = markdownText;
	output.select();
	document.execCommand('copy');
	output.blur();
	document.body.append('copied !');
}
