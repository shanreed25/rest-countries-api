const main = document.getElementById('main');
const loadingMessage = document.createElement('span');

export function showLoadingState(){
    loadingMessage.className = 'data-status';
    loadingMessage.textContent = 'Loading countries.....'
    loadingMessage.setAttribute('role', 'status')
    main.replaceChildren(loadingMessage)
}