export enum IconName {
    Cross = 'cross',
    Search = 'search',
}

export const icons: Record<IconName, string> = {
  [IconName.Cross]: '<svg width="72px" height="72px" viewBox="0 0 72 72" id="emoji" xmlns="http://www.w3.org/2000/svg"> <g id="color"/> <g id="hair"/> <g id="skin"/> <g id="skin-shadow"/> <g id="line">   <line x1="17.5" x2="54.5" y1="17.5" y2="54.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>   <line x1="54.5" x2="17.5" y1="17.5" y2="54.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/> </g></svg>',
  [IconName.Search]: '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"    viewBox="0 0 52.966 52.966" style="enable-background:new 0 0 52.966 52.966;" xml:space="preserve"><path d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21   c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279   C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19   S32.459,40,21.983,40z"/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>',
};
