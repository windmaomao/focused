let color = '#aaa'

chrome.runtime.onInstalled.addListener(() => {
	chrome.storage.sync.set({ color })
})

chrome.action.onClicked.addListener((tab) => {
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		files: ['content.js']
	})
})