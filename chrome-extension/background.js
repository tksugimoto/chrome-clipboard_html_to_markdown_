import transformToMarkdownFormat from './transformToMarkdownFormat.js';

 const copy = (() => {
	const textarea = document.createElement('textarea');
	document.body.appendChild(textarea);
	return text => {
		textarea.value = text;
		textarea.select();
		document.execCommand('copy');
		textarea.value = '';
	};
 })();

const htmlToElement = (htmlText) => {
	const div = document.createElement('div');
	div.innerHTML = htmlText;
	return div;
};

const convertToMarkdown = (() => {
	const pasteTarget = document.createElement('input');
	document.body.appendChild(pasteTarget);

	pasteTarget.addEventListener('paste', evt => {
		evt.preventDefault();
		Array.from(evt.clipboardData.items)
		.filter(item => item.type === 'text/html')
		.forEach(item => {
			item.getAsString(htmlText => {
				const htmlElement = htmlToElement(htmlText);
				const markdownText = transformToMarkdownFormat(htmlElement).trim();
				copy(markdownText);
			});
		});
	});

	return () => {
		pasteTarget.focus();
		document.execCommand('Paste');
	};
})();

chrome.commands.onCommand.addListener(command => {
	if (command === 'convert_to_markdown') {
		convertToMarkdown();
	}
});
