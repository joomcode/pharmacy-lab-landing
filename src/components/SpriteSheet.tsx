export const SpriteSheet = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: `
<svg width="0" height="0" class="hidden">
  <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="chevron-left">
    <path d="M30 36L18 24l12-12" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  </symbol>
  <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="chevron-right">
    <path d="M18 36l12-12-12-12" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  </symbol>
  <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 60" id="click">
    <path d="M6 30a13 13 0 1013-13A13.015 13.015 0 006 30zm24 0a11 11 0 11-11-11 11.013 11.013 0 0111 11z" fill="currentColor"/>
    <path d="M13.343 30A4 4 0 1019 35.657L24.657 30A4 4 0 1019 24.343L13.343 30zm4.243 4.243a2.001 2.001 0 01-2.829-2.829l2.122-2.121 2.828 2.828-2.121 2.122zm4.243-9.07a2 2 0 011.414 3.413l-2.122 2.121-2.828-2.828 2.121-2.122a1.999 1.999 0 011.415-.584z" fill="currentColor"/>
    <path d="M36 50H2V10h36V5a5.006 5.006 0 00-5-5H5a5.006 5.006 0 00-5 5v50a5.006 5.006 0 005 5h28a5.006 5.006 0 005-5V33h-2v17zM5 2h28a3 3 0 013 3v3H2V5a3 3 0 013-3zm28 56H5a3 3 0 01-3-3v-3h34v3a3 3 0 01-3 3z" fill="currentColor"/>
    <path d="M6 5a1 1 0 102 0 1 1 0 00-2 0zm7-1h-2a1 1 0 100 2h2a1 1 0 100-2zm8 50h-4a1 1 0 100 2h4a1 1 0 100-2zm28-42H35a3 3 0 00-3 3v8a3 3 0 003 3h3v4a1 1 0 001.781.625L43.48 26H49a3 3 0 003-3v-8a3 3 0 00-3-3zm1 11a1 1 0 01-1 1h-6a1 1 0 00-.781.375L40 27.149V25a1 1 0 00-1-1h-4a1 1 0 01-1-1v-8a1 1 0 011-1h14a1 1 0 011 1v8z" fill="currentColor"/>
    <path d="M41 19a1 1 0 102 0 1 1 0 00-2 0zm4 0a1 1 0 102 0 1 1 0 00-2 0zm-8 0a1 1 0 102 0 1 1 0 00-2 0z" fill="currentColor"/>
  </symbol>
  <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 60" id="consult">
    <path d="M27 25.667V24a2 2 0 002-2v-4a2 2 0 00-2-2H3a2 2 0 00-2 2v4a2 2 0 002 2v1.667L.607 28.861A2.945 2.945 0 000 30.67V57a3 3 0 003 3h24a3 3 0 003-3V30.67a2.934 2.934 0 00-.6-1.8L27 25.667zM3 18h3v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h3v4H3v-4zm25 39a1 1 0 01-1 1H3a1 1 0 01-1-1V30.67a.967.967 0 01.2-.6l2.6-3.47A1 1 0 005 26v-2h20v2a1 1 0 00.2.6l2.608 3.479a.96.96 0 01.192.591V57z" fill="currentColor"></path>
    <path d="M23 31H7a3 3 0 00-3 3v18a3 3 0 003 3h16a3 3 0 003-3V34a3 3 0 00-3-3zm1 21a1 1 0 01-1 1H7a1 1 0 01-1-1V34a1 1 0 011-1h16a1 1 0 011 1v18z" fill="currentColor"></path>
    <path d="M21 40h-3v-3a1 1 0 00-1-1h-4a1 1 0 00-1 1v3H9a1 1 0 00-1 1v4a1 1 0 001 1h3v3a1 1 0 001 1h4a1 1 0 001-1v-3h3a1 1 0 001-1v-4a1 1 0 00-1-1zm-1 4h-3a1 1 0 00-1 1v3h-2v-3a1 1 0 00-1-1h-3v-2h3a1 1 0 001-1v-3h2v3a1 1 0 001 1h3v2zM52 0H26a3 3 0 00-3 3v11h2V3a1 1 0 011-1h26a1 1 0 011 1v16a1 1 0 01-1 1h-9a1 1 0 00-.707.293L36 26.586V21a1 1 0 00-1-1h-4v2h3v7a1 1 0 001.707.707L43.414 22H52a3 3 0 003-3V3a3 3 0 00-3-3z" fill="currentColor"></path>
    <path d="M39 16.657L44.657 11a4.002 4.002 0 000-5.657 4.001 4.001 0 00-5.657 0L33.343 11A4 4 0 0039 16.657zm1.414-9.9a2 2 0 112.829 2.829l-2.122 2.121-2.828-2.828 2.121-2.122zm-5.657 5.657l2.122-2.121 2.828 2.828-2.121 2.122a2 2 0 11-2.829-2.829z" fill="currentColor"></path>
  </symbol>
  <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 34" id="delivery">
    <path d="M59.707 13.293L47.293.879A2.978 2.978 0 0045.171 0H11a3 3 0 00-3 3v22a3 3 0 003 3h2.08a6.978 6.978 0 002.031 4H0v2h48a7.006 7.006 0 006.92-6H57a3 3 0 003-3V14a1 1 0 00-.293-.707zM58 15H43V6h6.586L58 14.414V15zM15 27a4.999 4.999 0 119.998 0A4.999 4.999 0 0115 27zm9.889 5a6.978 6.978 0 002.031-4h14.16a6.978 6.978 0 002.031 4H24.889zM48 32a5 5 0 115-5 5.006 5.006 0 01-5 5zm9-6h-2.08a6.991 6.991 0 00-13.84 0H26.92a6.991 6.991 0 00-13.84 0H11a1 1 0 01-1-1V3a1 1 0 011-1h34.171a1 1 0 01.708.293L47.586 4H43a2 2 0 00-2 2v9a2 2 0 002 2h15v8a1 1 0 01-1 1z" fill="currentColor"></path>
    <path d="M19 27a1 1 0 102 0 1 1 0 00-2 0zm28 0a1 1 0 102 0 1 1 0 00-2 0zM29.657 11L24 5.343A4 4 0 0018.343 11l5 5H18v2h14v-2h-1.816a4.008 4.008 0 00-.527-5zm-1.414 4.243a1.999 1.999 0 01-2.829 0l-2.121-2.122 2.828-2.828 2.122 2.121a1.998 1.998 0 010 2.829zm-8.486-8.486a2 2 0 012.829 0l2.121 2.122-2.828 2.828-2.122-2.121a2 2 0 010-2.829zM14 17a1 1 0 102 0 1 1 0 00-2 0zM4 25a1 1 0 102 0 1 1 0 00-2 0zm-4 0a1 1 0 102 0 1 1 0 00-2 0zm5 4a1 1 0 102 0 1 1 0 00-2 0zm-4 0a1 1 0 102 0 1 1 0 00-2 0z" fill="currentColor"></path>
  </symbol>
  <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" id="feature_1">
    <circle opacity=".2" cx="50" cy="50" r="50" fill="#F5B846"></circle>
    <path d="M37 55.466h19.066A12.99 12.99 0 0059.533 55v1.008a3.82 3.82 0 00-2.466 1.551c-.655.905-1 2.14-1 3.573v5.2c0 .15.039.3.114.43l2.485 4.34v6.032a.867.867 0 00.867.867h13a.867.867 0 00.867-.867V71.25l1.68-4.623a.867.867 0 00.053-.296V55.466a2.599 2.599 0 00-3.467-2.451v-.149a2.598 2.598 0 00-3.875-2.265 2.62 2.62 0 00-.938-.878 13 13 0 00-10.787-20.256H37a13 13 0 100 26zM69.066 52a.868.868 0 01.867.866v7.8a.867.867 0 101.733 0v-5.2a.867.867 0 011.734 0v10.712L71.718 70.8a.868.868 0 00-.052.296v5.17H60.4V70.87c0-.151-.04-.3-.115-.43L57.8 66.1v-4.97c0-.896.188-2.813 1.733-3.332v2.868a.867.867 0 101.733 0V45.933a.867.867 0 111.734 0v11.813a.867.867 0 001.733 0V52a.866.866 0 111.733 0v6.933a.866.866 0 101.734 0v-6.067a.867.867 0 01.866-.866zM37 31.2h19.066a11.264 11.264 0 018.79 18.31c-.04.013-.082.024-.123.038v-3.615a2.6 2.6 0 10-5.2 0v7.255c-1.12.362-2.29.546-3.467.545H37A11.267 11.267 0 1137 31.2z" fill="#F5B846"></path>
    <path d="M51.733 51.133c0-.328-.062-.653-.184-.958a2.6 2.6 0 00.333-4.902l1.564-7.817.697-2.79h1.923a.867.867 0 100-1.733h-2.6a.868.868 0 00-.84.657l-.703 2.81H35.267a.866.866 0 00-.85 1.037l1.733 8.666a.866.866 0 00.85.697h13.867a.867.867 0 010 1.733H37a2.602 2.602 0 102.45 1.733h7.232a2.6 2.6 0 105.051.867zm-.71-10.4H48.79l.26-2.6h2.492l-.52 2.6zm-7.956 1.734v2.6H41.25l-.26-2.6h2.076zm-2.25-1.734l-.26-2.6h2.51v2.6h-2.25zm3.983 1.734h2.076l-.26 2.6H44.8v-2.6zm0-1.734v-2.6h2.509l-.26 2.6H44.8zm-5.984-2.6l.26 2.6h-2.232l-.52-2.6h2.492zm-1.625 4.334h2.058l.26 2.6h-1.798l-.52-2.6zm11.167 2.6l.26-2.6h2.058l-.52 2.6h-1.798zm-10.491 6.066a.866.866 0 11-1.733 0 .866.866 0 011.733 0zM49.133 52a.867.867 0 110-1.734.867.867 0 010 1.734zm-2.346 8.92l-2.6 2.6a.868.868 0 000 1.226l2.6 2.6a.867.867 0 001.226 0l2.6-2.6a.867.867 0 000-1.226l-2.6-2.6a.865.865 0 00-1.226 0zm.613 4.588l-1.374-1.375L47.4 62.76l1.375 1.374-1.375 1.375zm25.746-39.254a.865.865 0 00-1.226 0l-2.6 2.6a.866.866 0 000 1.226l2.6 2.6a.868.868 0 001.226 0l2.6-2.6a.867.867 0 000-1.226l-2.6-2.6zm-.613 4.587l-1.374-1.374 1.374-1.375 1.374 1.375-1.374 1.374z" fill="#F5B846"></path>
  </symbol>
  <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" id="feature_2">
    <circle opacity=".2" cx="50" cy="50" r="50" fill="#94C5BC"></circle>
    <path d="M24.897 40.345v27.793a4.487 4.487 0 004.482 4.483h12.3l-1.514 6.058a.897.897 0 00.87 1.114h17.93a.897.897 0 00.87-1.114l-1.514-6.058h12.3a4.488 4.488 0 004.482-4.483V40.345h-.002c.584-.775.9-1.72.899-2.69v-1.793a.895.895 0 00-.208-.574l-4.275-5.13V28.69a2.693 2.693 0 00-2.69-2.69H31.173a2.693 2.693 0 00-2.69 2.69v1.468l-4.274 5.13a.895.895 0 00-.207.574H24v1.793c-.001.97.315 1.915.899 2.69h-.002zM57.817 78H42.183l1.345-5.38h12.944L57.817 78zm15.493-9.862a2.693 2.693 0 01-2.69 2.69H29.38a2.693 2.693 0 01-2.69-2.69v-2.69h46.62v2.69zM45.517 51.103h.897V52a.897.897 0 001.793 0v-.897h3.586V52a.897.897 0 001.793 0v-.897h1.002l1.569 12.552H43.843l1.57-12.552h.104zm6.276-1.793h-3.586v-1.793a1.793 1.793 0 013.586 0v1.793zm6.17 14.345L56.62 52.897h3.243v.896a.896.896 0 101.793 0v-.896h1.016l1.537 10.758h-6.244zm-1.568-12.552l-.057-.458a1.793 1.793 0 013.524.458h-3.467zm-12.79 0h-3.467a1.792 1.792 0 013.524-.458l-.057.458zm-5.26 2.69a.897.897 0 001.793 0v-.896h3.243l-1.345 10.758h-6.244l1.537-10.758h1.016v.896zm27.674 9.862l-1.683-11.782a.896.896 0 00-.888-.77h-1.793a3.585 3.585 0 00-6.69-1.793h-1.379v-1.793a3.586 3.586 0 10-7.172 0v1.793h-1.379a3.585 3.585 0 00-6.69 1.793h-1.793a.897.897 0 00-.888.77l-1.683 11.782H26.69V41.763a4.475 4.475 0 005.379-1.421 4.477 4.477 0 007.172 0 4.478 4.478 0 007.173 0 4.478 4.478 0 007.172 0 4.478 4.478 0 007.173 0 4.478 4.478 0 007.172 0 4.476 4.476 0 005.38 1.42v21.893h-7.292zM25.793 36.76h5.38v.896a2.69 2.69 0 01-5.38 0v-.896zm43.035 0h5.379v.896a2.69 2.69 0 01-5.38 0v-.896zm-7.173 0h5.38v.896a2.69 2.69 0 01-5.38 0v-.896zm-7.172 0h5.38v.896a2.69 2.69 0 01-5.38 0v-.896zm-7.173 0h5.38v.896a2.69 2.69 0 01-5.38 0v-.896zm-7.172 0h5.38v.896a2.69 2.69 0 11-5.38 0v-.896zm-7.172 0h5.379v.896a2.69 2.69 0 11-5.38 0v-.896zm-1.794-8.966h37.656a.898.898 0 01.896.897v.896H30.276v-.896a.897.897 0 01.896-.897zM29.8 31.38h40.402l2.988 3.586H26.811l2.988-3.586z" fill="#249C86"></path>
    <path d="M60.759 58.276a.897.897 0 100-1.793.897.897 0 000 1.793zm-8.069-1.793a.897.897 0 100-1.793.897.897 0 000 1.793zm-5.38 0a.897.897 0 100-1.793.897.897 0 000 1.793zm-8.069 1.793a.897.897 0 100-1.793.897.897 0 000 1.793zm11.656 8.966h-1.793a.897.897 0 100 1.793h1.793a.896.896 0 000-1.793z" fill="#249C86"></path>
  </symbol>
  <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" id="feature_3">
    <circle opacity=".2" cx="50" cy="50" r="50" fill="#429BD7"></circle>
    <path d="M28.533 41.8h42.933a.933.933 0 00.934-.933v-3.734a.933.933 0 00-.934-.933H28.533a.933.933 0 00-.933.933v3.734a.933.933 0 00.933.933zm42-1.867h-1.867v-1.866h1.867v1.866zm-41.067-1.866H66.8v1.866H29.466v-1.866zm4.667-7.467a.933.933 0 100-1.867.933.933 0 000 1.867zm-3.733 0a.933.933 0 100-1.867.933.933 0 000 1.867zm-3.733 0a.933.933 0 100-1.867.933.933 0 000 1.867z" fill="#1C70A9"></path>
    <path d="M24.8 75.4h50.4a2.803 2.803 0 002.8-2.8V27.8a2.803 2.803 0 00-2.8-2.8H24.8a2.803 2.803 0 00-2.8 2.8v44.8a2.803 2.803 0 002.8 2.8zm-.933-47.6a.934.934 0 01.933-.933h50.4a.935.935 0 01.933.933v4.667H23.867V27.8zm0 6.533h52.266V72.6a.934.934 0 01-.933.933H24.8a.934.934 0 01-.933-.933V34.333z" fill="#1C70A9"></path>
    <path d="M28.533 54.867H33.2v.933a.933.933 0 001.593.66L36 55.253l2.14 2.14a.933.933 0 001.32 0l2.8-2.8a.933.933 0 000-1.32l-2.14-2.14 1.206-1.206a.933.933 0 00-.66-1.594H38.8V44.6a.933.933 0 00-.934-.933h-9.333a.933.933 0 00-.933.933v9.333a.933.933 0 00.933.934zm11.747-.934l-1.48 1.48-2.14-2.14a.935.935 0 00-1.32 0l-.274.274V50.2h3.347l-.273.273a.935.935 0 000 1.32l2.14 2.14zm-10.814-8.4h7.467v2.8h-2.8a.933.933 0 00-.933.934V53h-3.734v-7.467zm-.933 26.134h9.333a.933.933 0 00.934-.934V61.4a.933.933 0 00-.934-.933h-9.333a.933.933 0 00-.933.933v9.333a.933.933 0 00.933.934zm.933-9.334h7.467V69.8h-7.467v-7.467zM55.6 44.6a.933.933 0 00-.933-.933h-9.333a.933.933 0 00-.934.933v9.333a.933.933 0 00.934.934h9.333a.933.933 0 00.933-.934V44.6zM53.734 53h-7.467v-7.467h7.467V53zm17.733-9.333h-9.334a.933.933 0 00-.933.933v9.333a.933.933 0 00.933.934h9.334a.933.933 0 00.933-.934V44.6a.933.933 0 00-.933-.933zM70.534 53h-7.467v-7.467h7.467V53zm-18.008 7.74a.933.933 0 00-1.593.66v1.867h-7.466a.933.933 0 00-.934.933v3.733a.933.933 0 00.934.934h7.466v1.866a.933.933 0 001.593.66l4.667-4.666a.933.933 0 000-1.32l-4.666-4.667zm.274 7.74v-.547a.933.933 0 00-.933-.933H44.4v-1.867h7.467a.933.933 0 00.933-.933v-.547l2.413 2.414L52.8 68.48zM28.533 58.6h3.733a.933.933 0 000-1.867h-3.733a.933.933 0 100 1.867zm16.801 0h3.733a.933.933 0 000-1.867h-3.733a.933.933 0 100 1.867zm16.799 0h3.734a.933.933 0 000-1.867h-3.734a.933.933 0 100 1.867zm-7.466-1.867H52.8a.933.933 0 100 1.867h1.867a.934.934 0 000-1.867zm16.8 0H69.6a.933.933 0 100 1.867h1.867a.934.934 0 000-1.867zm-3.734 14.934a.933.933 0 100-1.867.933.933 0 000 1.867zm-3.733 0a.933.933 0 100-1.867.933.933 0 000 1.867z" fill="#1C70A9"></path>
    <path d="M71.467 61.4h-.933a.934.934 0 00-.886.638l-.72 2.162h-6.794a.934.934 0 00-.906 1.16l.933 3.733a.933.933 0 00.906.707h5.6a.933.933 0 00.905-.707l.925-3.698.71-2.128h.26a.933.933 0 000-1.867zm-3.529 6.533h-4.143l-.466-1.866h5.076l-.467 1.866z" fill="#1C70A9"></path>
  </symbol>
  <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" id="feature_4">
    <circle opacity=".2" cx="50" cy="50" r="50" fill="#7856BA"></circle>
    <path d="M76 24.867a.867.867 0 00-.867-.867H38.72a5.08 5.08 0 00-2.115.526c-1.422.713-2.205 2.065-2.205 3.807v14.734h-.867a.867.867 0 00-.866.866v4.334h-1.734a.866.866 0 00-.811.562l-2.534 6.757-3.334 3.334a.865.865 0 00-.254.613v5.2a.867.867 0 00.867.867h.866a3.467 3.467 0 006.934 0H34.4v5.2h-6.067a.867.867 0 00-.866.841c-.003.078-.043 1.922 1.196 3.198.747.77 1.769 1.161 3.034 1.161H68.2v-.003c3.293-.072 4.246-2.835 4.287-4.306v-.023l.018-10.26a8.648 8.648 0 00.022-12.395l.01-5.946v-5.2h2.596A.867.867 0 0076 37V24.867zM53.467 44.8v13.867H34.4V44.8h19.067zM31.534 50h1.133v5.2h-3.083l1.95-5.2zM29.2 67.333a1.733 1.733 0 110-3.466 1.733 1.733 0 010 3.466zm3-3.466a3.463 3.463 0 00-6 0h-.467v-3.975l2.96-2.959h3.974v6.934H32.2zm2.2-3.467h19.067v3.467h-1.333a3.464 3.464 0 00-6 0H34.4V60.4zm16.467 5.2a1.733 1.733 0 11-3.467 0 1.733 1.733 0 013.467 0zm-20.952 8.04a2.492 2.492 0 01-.596-1.107H63.85c.086.435.229.856.424 1.253.083.166.177.327.28.48H31.698c-.785 0-1.369-.205-1.783-.627zM73.4 55.2a6.933 6.933 0 11-6.933-6.933A6.94 6.94 0 0173.4 55.2zm-6.933-8.667a8.667 8.667 0 104.303 16.185l-.016 8.93c-.038.47-.167.928-.38 1.349-.45.854-1.203 1.27-2.303 1.27-1.072 0-1.8-.396-2.223-1.21a3.496 3.496 0 01-.363-1.39.867.867 0 00-.867-.867H36.133v-5.2h9.534a3.467 3.467 0 106.933 0h1.733a.867.867 0 00.867-.867v-20.8a.867.867 0 00-.867-.866h-18.2V28.333c0-1.079.394-1.81 1.205-2.236.43-.216.901-.34 1.382-.364h32.953a4.314 4.314 0 00-.868 2.6v14.732l-.009 4.632a8.61 8.61 0 00-4.33-1.164zm6.071-10.4v-7.8a2.603 2.603 0 011.729-2.45v10.25h-1.729z" fill="#6342A4"></path>
    <path d="M69.321 51.987l-4.587 4.587-1.12-1.12a.867.867 0 00-1.226 1.226l1.733 1.733a.865.865 0 001.226 0l5.2-5.2a.867.867 0 00-1.226-1.226zm-30.588 4.946h10.4a.867.867 0 00.866-.866V47.4a.867.867 0 00-.866-.867h-10.4a.867.867 0 00-.867.867v8.667a.866.866 0 00.867.866zM39.6 55.2v-3.467h1.733v.867a.867.867 0 001.254.775l1.346-.673 1.346.673a.867.867 0 001.254-.775v-.867h1.733V55.2H39.6zm3.466-6.933H44.8v2.93l-.478-.239a.867.867 0 00-.776 0l-.479.24v-2.931zm5.2 1.733h-1.733v-1.733h1.733V50zm-6.933-1.733V50H39.6v-1.733h1.733zm20.8-19.067a2.604 2.604 0 00-2.451 1.733h-3.765a2.6 2.6 0 00-4.902 0h-3.764a2.6 2.6 0 100 1.734h3.764a2.6 2.6 0 004.902 0h3.765a2.6 2.6 0 102.45-3.467zM44.8 32.667a.867.867 0 110-1.734.867.867 0 010 1.734zm8.666 0a.867.867 0 110-1.734.867.867 0 010 1.734zm8.667 0a.867.867 0 110-1.735.867.867 0 010 1.735zM46.533 37h-3.466a.867.867 0 000 1.733h3.466a.867.867 0 000-1.733zm8.667 0h-3.467a.867.867 0 100 1.733H55.2a.867.867 0 000-1.733zm8.667 0H60.4a.867.867 0 000 1.733h3.467a.867.867 0 000-1.733zm-33.8 23.4a.867.867 0 100-1.733.867.867 0 000 1.733z" fill="#6342A4"></path>
  </symbol>
  <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 109 20" id="logo">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14 14.064C14 17.336 11.314 20 8 20V5.936C8 2.664 10.686 0 14 0v14.064z" fill="currentColor"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 20a3 3 0 100-6 3 3 0 000 6z" fill="#5BB75F"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M108.66.727a1.625 1.625 0 00-.893-.594L107.23 0l-.518.195a1.59 1.59 0 00-.733.682l-6.871 11.254L92.236.877a1.668 1.668 0 00-.813-.682 1.702 1.702 0 00-1.045-.053 1.627 1.627 0 00-.894.593c-.223.28-.343.627-.34.984V18.36a1.664 1.664 0 001.645 1.63 1.606 1.606 0 001.135-.478c.32-.298.499-.716.491-1.152V7.585l5.263 8.587.072.097a.129.129 0 000 .053l.071.071.054.053.062.053.358.107.098.07.107.054h.206c.119.037.242.061.366.07h.054c.23.01.46-.032.67-.123h.08l.099-.053.098-.054.08-.07.054-.054.17-.106.071-.071v-.053l.054-.098 5.209-8.533V18.36c-.01.433.162.85.474 1.152a1.66 1.66 0 002.341 0c.311-.303.483-.72.474-1.152V1.71a1.557 1.557 0 00-.34-.983zm-40.72 16.34a9.664 9.664 0 007.077 2.924 9.71 9.71 0 007.095-2.924 9.52 9.52 0 002.931-7.018 9.574 9.574 0 00-2.93-7.036c-3.915-3.878-10.258-3.878-14.173 0a9.548 9.548 0 00-2.948 7.036 9.504 9.504 0 002.948 7.018zm-22.955 0a9.664 9.664 0 007.077 2.924 9.71 9.71 0 007.095-2.924 9.52 9.52 0 002.93-7.018 9.574 9.574 0 00-2.93-7.036A9.736 9.736 0 0052.062.106a9.682 9.682 0 00-7.077 2.907 9.548 9.548 0 00-2.95 7.036 9.504 9.504 0 002.95 7.018zM35.879.62a1.58 1.58 0 00-.491 1.161v12.184a2.646 2.646 0 01-.778 1.94 2.692 2.692 0 01-1.957.807c-.439-.008-.86.17-1.161.487A1.58 1.58 0 0031 18.36c-.007.436.171.854.492 1.152.3.318.722.495 1.161.488a5.914 5.914 0 004.298-1.773 5.815 5.815 0 001.788-4.262V1.781a1.58 1.58 0 00-.492-1.16 1.561 1.561 0 00-1.162-.488A1.606 1.606 0 0035.88.62zm16.183 2.756a6.497 6.497 0 00-4.745 1.95 6.415 6.415 0 00-1.984 4.723 6.363 6.363 0 001.984 4.705 6.72 6.72 0 004.754 1.965 6.72 6.72 0 004.753-1.965 6.389 6.389 0 001.966-4.705 6.433 6.433 0 00-1.957-4.723 6.542 6.542 0 00-4.771-1.95zm22.955 0a6.497 6.497 0 00-4.78 1.95 6.416 6.416 0 00-1.984 4.723 6.363 6.363 0 001.984 4.705 6.721 6.721 0 004.754 1.965 6.721 6.721 0 004.753-1.965 6.389 6.389 0 001.966-4.705 6.433 6.433 0 00-1.966-4.723 6.542 6.542 0 00-4.727-1.95z" fill="currentColor"/>
  </symbol>
  <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" id="pharmacy">
    <path d="M50 35H10a1 1 0 00-1 1v12a1 1 0 001 1h40a1 1 0 001-1V36a1 1 0 00-1-1zM17 47v-5a1 1 0 011-1h8a1 1 0 011 1v5H17zm18 0a3 3 0 013-3h2a3 3 0 013 3h-8zm3-6a1 1 0 112 0 1 1 0 01-2 0zm11 6h-4a4.993 4.993 0 00-3.315-4.687 3 3 0 10-5.369 0A4.991 4.991 0 0033 47h-4v-5a3 3 0 00-3-3h-8a3 3 0 00-3 3v5h-4V37h38v10z" fill="currentColor"></path>
    <path d="M23 43h-2v2h2v-2z" fill="currentColor"></path>
    <path d="M55 58V33.9a5.01 5.01 0 004-4.9v-6a1 1 0 00-.1-.447l-6-12A1 1 0 0052 10h-4V1a1 1 0 00-1-1H13a1 1 0 00-1 1v9H8a1 1 0 00-.895.553l-6 12A1 1 0 001 23v6a5.01 5.01 0 004 4.9V58H0v2h60v-2h-5zm2-29a3 3 0 01-6 0v-1h6v1zm-8 0a3 3 0 01-6 0v-1h6v1zm-8 0a3 3 0 01-6 0v-1h6v1zm-8 0a3 3 0 01-6 0v-1h6v1zm-8 0a3 3 0 01-6 0v-1h6v1zm-8 0a3 3 0 01-6 0v-1h6v1zM3 24h54v2H3v-2zM14 2h32v16H14V2zM8.618 12H12v7a1 1 0 001 1h34a1 1 0 001-1v-7h3.382l5 10H3.618l5-10zM3 29v-1h6v1a3 3 0 01-6 0zm4 29V33.9a4.994 4.994 0 003-1.93 4.954 4.954 0 008 0 4.954 4.954 0 008 0 4.954 4.954 0 008 0 4.954 4.954 0 008 0 4.954 4.954 0 008 0 4.994 4.994 0 003 1.93V58H7z" fill="currentColor"></path>
    <path d="M35 7h-2V5a1 1 0 00-1-1h-4a1 1 0 00-1 1v2h-2a1 1 0 00-1 1v4a1 1 0 001 1h2v2a1 1 0 001 1h4a1 1 0 001-1v-2h2a1 1 0 001-1V8a1 1 0 00-1-1zm-1 4h-2a1 1 0 00-1 1v2h-2v-2a1 1 0 00-1-1h-2V9h2a1 1 0 001-1V6h2v2a1 1 0 001 1h2v2z" fill="currentColor"></path>
  </symbol>
  <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 56" id="question">
    <path d="M55 0H5a5.006 5.006 0 00-5 5v34a5.006 5.006 0 005 5h15.867l-.75 6H19a1 1 0 00-1 1v3h-4v2h32v-2h-4v-3a1 1 0 00-1-1h-1.117L39 42.938V42H5a3 3 0 01-3-3v-3h37v-2H2V5a3 3 0 013-3h50a3 3 0 013 3v29h-9v2h9v3a3 3 0 01-3 3h-6v2h6a5.006 5.006 0 005-5V5a5.006 5.006 0 00-5-5zM40 54H20v-2h20v2zm-17.867-4l.75-6h14.234l.75 6H22.133z" fill="#000"></path>
    <path d="M52 39a1 1 0 102 0 1 1 0 00-2 0zM6 18A12 12 0 1018 6 12.013 12.013 0 006 18zm22 0A10 10 0 1118 8a10.011 10.011 0 0110 10z" fill="#000"></path>
    <path d="M56 16a12 12 0 10-15 11.6V45a3 3 0 006 0V27.6A12.01 12.01 0 0056 16zm-22 0a10 10 0 1110 10 10.011 10.011 0 01-10-10zm11 29a1 1 0 01-2 0V27.949c.331.028.662.05 1 .05.338 0 .669-.022 1-.05v17.05z" fill="#000"></path>
    <path d="M53 16a9 9 0 10-9 9 9.011 9.011 0 009-9zm-16 0a7 7 0 117 7 7.008 7.008 0 01-7-7zm-24.657 2A4 4 0 1018 23.657L23.657 18A4 4 0 1018 12.343L12.343 18zm4.243 4.243a2 2 0 01-2.829-2.829l2.122-2.121 2.828 2.828-2.121 2.122zm4.243-9.07a2 2 0 011.414 3.413l-2.122 2.121-2.828-2.828 2.121-2.122a1.999 1.999 0 011.415-.584z" fill="#000"></path>
  </symbol>
  <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39 35" id="quote">
    <path d="M14.508 19.697V35H0V23.0303C0 16.2626 0.779999 11.5152 2.34 8.78788C4.42 5.25253 7.748 2.32323 12.324 0L15.756 5.15152C10.556 6.86869 7.8 11.7172 7.488 19.697H14.508ZM37.752 19.697V35H23.244V23.0303C23.244 17.0707 23.972 12.5253 25.428 9.39394C27.196 5.65657 30.576 2.52526 35.568 0L39 5.15152C33.8 6.86869 31.044 11.7172 30.732 19.697H37.752Z" fill="currentColor"/>
  </symbol>
  <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 60" id="response">
    <path d="M51 6h-8.586L36.707.293A1 1 0 0036 0H15a2 2 0 00-2 2v4H5a5.006 5.006 0 00-5 5v32a5.006 5.006 0 005 5h14.867l-.75 6H18a2 2 0 00-2 2v2h-2v2h28v-2h-2v-2a2 2 0 00-2-2h-1.117l-.75-6H51a5.006 5.006 0 005-5V11a5.006 5.006 0 00-5-5zM37 3.414L39.586 6H37V3.414zM15 2h20v4a2 2 0 002 2h4v26H15V2zM5 8h8v26a2 2 0 002 2h26a2 2 0 002-2V8h8a3 3 0 013 3v27H2V11a3 3 0 013-3zm33 50H18v-2h20v2zm-3.133-4H21.133l.75-6h12.234l.75 6zM51 46H5a3 3 0 01-3-3v-3h52v3a3 3 0 01-3 3z" fill="#000"></path>
    <path d="M49 43a1 1 0 102 0 1 1 0 00-2 0zM28 8a10 10 0 1010 10A10.011 10.011 0 0028 8zm0 18a8 8 0 118-8 8.009 8.009 0 01-8 8z" fill="#000"></path>
    <path d="M31 15v-2a1 1 0 00-1-1h-4a1 1 0 00-1 1v2h-2a1 1 0 00-1 1v4a1 1 0 001 1h2v2a1 1 0 001 1h4a1 1 0 001-1v-2h2a1 1 0 001-1v-4a1 1 0 00-1-1h-2zm1 4h-2a1 1 0 00-1 1v2h-2v-2a1 1 0 00-1-1h-2v-2h2a1 1 0 001-1v-2h2v2a1 1 0 001 1h2v2z" fill="#000"></path>
  </symbol>
  <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 60" id="web">
    <path d="M51 6H42.414L36.707 0.293C36.5195 0.105451 36.2652 5.66374e-05 36 0H15C14.4696 0 13.9609 0.210714 13.5858 0.585786C13.2107 0.960859 13 1.46957 13 2V6H5C3.67441 6.00159 2.40356 6.52888 1.46622 7.46622C0.528882 8.40356 0.00158786 9.67441 0 11V43C0.00158786 44.3256 0.528882 45.5964 1.46622 46.5338C2.40356 47.4711 3.67441 47.9984 5 48H19.867L19.117 54H18C17.4696 54 16.9609 54.2107 16.5858 54.5858C16.2107 54.9609 16 55.4696 16 56V58H14V60H42V58H40V56C40 55.4696 39.7893 54.9609 39.4142 54.5858C39.0391 54.2107 38.5304 54 38 54H36.883L36.133 48H51C52.3256 47.9984 53.5964 47.4711 54.5338 46.5338C55.4711 45.5964 55.9984 44.3256 56 43V11C55.9984 9.67441 55.4711 8.40356 54.5338 7.46622C53.5964 6.52888 52.3256 6.00159 51 6ZM37 3.414L39.586 6H37V3.414ZM15 2H35V6C35 6.53043 35.2107 7.03914 35.5858 7.41421C35.9609 7.78929 36.4696 8 37 8H41V34H15V2ZM5 8H13V34C13 34.5304 13.2107 35.0391 13.5858 35.4142C13.9609 35.7893 14.4696 36 15 36H41C41.5304 36 42.0391 35.7893 42.4142 35.4142C42.7893 35.0391 43 34.5304 43 34V8H51C51.7957 8 52.5587 8.31607 53.1213 8.87868C53.6839 9.44129 54 10.2044 54 11V38H2V11C2 10.2044 2.31607 9.44129 2.87868 8.87868C3.44129 8.31607 4.20435 8 5 8ZM38 58H18V56H38V58ZM34.867 54H21.133L21.883 48H34.117L34.867 54ZM51 46H5C4.20435 46 3.44129 45.6839 2.87868 45.1213C2.31607 44.5587 2 43.7957 2 43V40H54V43C54 43.7957 53.6839 44.5587 53.1213 45.1213C52.5587 45.6839 51.7957 46 51 46Z" fill="currentColor"/>
    <path d="M49 43C49 43.5523 49.4477 44 50 44C50.5523 44 51 43.5523 51 43C51 42.4477 50.5523 42 50 42C49.4477 42 49 42.4477 49 43Z" fill="currentColor"/>
    <path d="M28 8C26.0222 8 24.0888 8.58649 22.4443 9.6853C20.7998 10.7841 19.5181 12.3459 18.7612 14.1732C18.0043 16.0004 17.8063 18.0111 18.1922 19.9509C18.578 21.8907 19.5304 23.6725 20.9289 25.0711C22.3275 26.4696 24.1093 27.422 26.0491 27.8079C27.9889 28.1937 29.9996 27.9957 31.8268 27.2388C33.6541 26.4819 35.2159 25.2002 36.3147 23.5557C37.4135 21.9112 38 19.9778 38 18C37.9971 15.3487 36.9426 12.8069 35.0679 10.9321C33.1931 9.05742 30.6513 8.00291 28 8ZM28 26C26.4178 26 24.871 25.5308 23.5554 24.6518C22.2399 23.7727 21.2145 22.5233 20.609 21.0615C20.0035 19.5997 19.845 17.9911 20.1537 16.4393C20.4624 14.8874 21.2243 13.462 22.3432 12.3431C23.462 11.2243 24.8874 10.4624 26.4393 10.1537C27.9911 9.84504 29.5997 10.0035 31.0615 10.609C32.5233 11.2145 33.7727 12.2398 34.6518 13.5554C35.5308 14.871 36 16.4177 36 18C35.9976 20.121 35.154 22.1544 33.6542 23.6542C32.1545 25.154 30.121 25.9976 28 26Z" fill="currentColor"/>
    <path d="M31 15V13C31 12.7348 30.8946 12.4804 30.7071 12.2929C30.5196 12.1054 30.2652 12 30 12H26C25.7348 12 25.4804 12.1054 25.2929 12.2929C25.1054 12.4804 25 12.7348 25 13V15H23C22.7348 15 22.4804 15.1054 22.2929 15.2929C22.1054 15.4804 22 15.7348 22 16V20C22 20.2652 22.1054 20.5196 22.2929 20.7071C22.4804 20.8946 22.7348 21 23 21H25V23C25 23.2652 25.1054 23.5196 25.2929 23.7071C25.4804 23.8946 25.7348 24 26 24H30C30.2652 24 30.5196 23.8946 30.7071 23.7071C30.8946 23.5196 31 23.2652 31 23V21H33C33.2652 21 33.5196 20.8946 33.7071 20.7071C33.8946 20.5196 34 20.2652 34 20V16C34 15.7348 33.8946 15.4804 33.7071 15.2929C33.5196 15.1054 33.2652 15 33 15H31ZM32 19H30C29.7348 19 29.4804 19.1054 29.2929 19.2929C29.1054 19.4804 29 19.7348 29 20V22H27V20C27 19.7348 26.8946 19.4804 26.7071 19.2929C26.5196 19.1054 26.2652 19 26 19H24V17H26C26.2652 17 26.5196 16.8946 26.7071 16.7071C26.8946 16.5196 27 16.2652 27 16V14H29V16C29 16.2652 29.1054 16.5196 29.2929 16.7071C29.4804 16.8946 29.7348 17 30 17H32V19Z" fill="currentColor"/>
  </symbol>
  <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 56" id="search">
    <path d="M55 0H5C3.67441 0.00158786 2.40356 0.528882 1.46622 1.46622C0.528882 2.40356 0.00158786 3.67441 0 5V39C0.00158786 40.3256 0.528882 41.5964 1.46622 42.5338C2.40356 43.4711 3.67441 43.9984 5 44H20.867L20.117 50H19C18.7348 50 18.4804 50.1054 18.2929 50.2929C18.1054 50.4804 18 50.7348 18 51V54H14V56H46V54H42V51C42 50.7348 41.8946 50.4804 41.7071 50.2929C41.5196 50.1054 41.2652 50 41 50H39.883L39 42.938V42H5C4.20435 42 3.44129 41.6839 2.87868 41.1213C2.31607 40.5587 2 39.7957 2 39V36H39V34H2V5C2 4.20435 2.31607 3.44129 2.87868 2.87868C3.44129 2.31607 4.20435 2 5 2H55C55.7957 2 56.5587 2.31607 57.1213 2.87868C57.6839 3.44129 58 4.20435 58 5V34H49V36H58V39C58 39.7957 57.6839 40.5587 57.1213 41.1213C56.5587 41.6839 55.7957 42 55 42H49V44H55C56.3256 43.9984 57.5964 43.4711 58.5338 42.5338C59.4711 41.5964 59.9984 40.3256 60 39V5C59.9984 3.67441 59.4711 2.40356 58.5338 1.46622C57.5964 0.528882 56.3256 0.00158786 55 0ZM40 54H20V52H40V54ZM22.133 50L22.883 44H37.117L37.867 50H22.133Z" fill="currentColor"/>
    <path d="M52 39C52 39.5523 52.4477 40 53 40C53.5523 40 54 39.5523 54 39C54 38.4477 53.5523 38 53 38C52.4477 38 52 38.4477 52 39Z" fill="currentColor"/>
    <path d="M6 18C6 20.3734 6.70379 22.6935 8.02236 24.6668C9.34094 26.6402 11.2151 28.1783 13.4078 29.0866C15.6005 29.9948 18.0133 30.2324 20.3411 29.7694C22.6689 29.3064 24.8071 28.1635 26.4853 26.4853C28.1635 24.8071 29.3064 22.6689 29.7694 20.3411C30.2324 18.0133 29.9948 15.6005 29.0866 13.4078C28.1783 11.2151 26.6402 9.34094 24.6668 8.02236C22.6935 6.70379 20.3734 6 18 6C14.8185 6.00344 11.7682 7.26883 9.51852 9.51852C7.26883 11.7682 6.00344 14.8185 6 18ZM28 18C28 19.9778 27.4135 21.9112 26.3147 23.5557C25.2159 25.2002 23.6541 26.4819 21.8268 27.2388C19.9996 27.9957 17.9889 28.1937 16.0491 27.8079C14.1093 27.422 12.3275 26.4696 10.9289 25.0711C9.53041 23.6725 8.578 21.8907 8.19215 19.9509C7.8063 18.0111 8.00433 16.0004 8.7612 14.1732C9.51808 12.3459 10.7998 10.7841 12.4443 9.6853C14.0888 8.58649 16.0222 8 18 8C20.6513 8.00291 23.1931 9.05742 25.0679 10.9321C26.9426 12.8069 27.9971 15.3487 28 18Z" fill="currentColor"/>
    <path d="M56 15.9999C56.0035 13.7547 55.3771 11.5535 54.192 9.64661C53.0068 7.73969 51.3104 6.20351 49.2957 5.21268C47.2809 4.22186 45.0286 3.81614 42.7948 4.04164C40.5609 4.26715 38.4351 5.11483 36.659 6.48833C34.883 7.86183 33.5278 9.70605 32.7477 11.8114C31.9676 13.9167 31.7937 16.1986 32.2459 18.3978C32.6981 20.597 33.7582 22.6253 35.3057 24.252C36.8532 25.8787 38.8261 27.0386 41 27.5999V44.9999C41 45.7956 41.3161 46.5586 41.8787 47.1212C42.4413 47.6838 43.2043 47.9999 44 47.9999C44.7956 47.9999 45.5587 47.6838 46.1213 47.1212C46.6839 46.5586 47 45.7956 47 44.9999V27.5999C49.5719 26.9341 51.8504 25.4343 53.4789 23.3353C55.1075 21.2363 55.9941 18.6566 56 15.9999ZM34 15.9999C34 14.0221 34.5865 12.0887 35.6853 10.4442C36.7841 8.79972 38.3459 7.51799 40.1732 6.76111C42.0004 6.00424 44.0111 5.8062 45.9509 6.19206C47.8907 6.57791 49.6725 7.53032 51.0711 8.92884C52.4696 10.3274 53.422 12.1092 53.8078 14.049C54.1937 15.9888 53.9957 17.9995 53.2388 19.8267C52.4819 21.654 51.2002 23.2158 49.5557 24.3146C47.9112 25.4134 45.9778 25.9999 44 25.9999C41.3487 25.997 38.8069 24.9425 36.9321 23.0678C35.0574 21.193 34.0029 18.6512 34 15.9999ZM45 44.9999C45 45.2651 44.8946 45.5195 44.7071 45.707C44.5196 45.8946 44.2652 45.9999 44 45.9999C43.7348 45.9999 43.4804 45.8946 43.2929 45.707C43.1053 45.5195 43 45.2651 43 44.9999V27.9489C43.331 27.9769 43.662 27.9999 44 27.9999C44.338 27.9999 44.669 27.9769 45 27.9489V44.9999Z" fill="currentColor"/>
    <path d="M53 16C53 14.22 52.4722 12.4799 51.4832 10.9999C50.4943 9.51983 49.0887 8.36628 47.4442 7.68509C45.7996 7.0039 43.99 6.82567 42.2442 7.17294C40.4984 7.5202 38.8947 8.37737 37.636 9.63604C36.3774 10.8947 35.5202 12.4984 35.1729 14.2442C34.8257 15.99 35.0039 17.7996 35.6851 19.4442C36.3663 21.0887 37.5198 22.4943 38.9999 23.4832C40.4799 24.4722 42.22 25 44 25C46.3861 24.9971 48.6736 24.0479 50.3607 22.3608C52.0479 20.6736 52.9971 18.3861 53 16ZM37 16C37 14.6155 37.4105 13.2622 38.1797 12.111C38.9489 10.9599 40.0421 10.0627 41.3212 9.53285C42.6003 9.00303 44.0078 8.86441 45.3656 9.13451C46.7235 9.4046 47.9708 10.0713 48.9498 11.0503C49.9287 12.0292 50.5954 13.2765 50.8655 14.6344C51.1356 15.9922 50.997 17.3997 50.4672 18.6788C49.9373 19.9579 49.0401 21.0511 47.889 21.8203C46.7379 22.5895 45.3845 23 44 23C42.1441 22.9979 40.3649 22.2597 39.0526 20.9474C37.7403 19.6351 37.0021 17.8559 37 16Z" fill="currentColor"/>
    <path d="M12.343 18C11.5928 18.7502 11.1714 19.7676 11.1714 20.8285C11.1714 21.8894 11.5928 22.9068 12.343 23.657C13.0932 24.4072 14.1106 24.8286 15.1715 24.8286C16.2324 24.8286 17.2498 24.4072 18 23.657L23.657 18C24.4072 17.2498 24.8286 16.2324 24.8286 15.1715C24.8286 14.1106 24.4072 13.0932 23.657 12.343C22.9068 11.5928 21.8894 11.1714 20.8285 11.1714C19.7676 11.1714 18.7502 11.5928 18 12.343L12.343 18ZM16.586 22.243C16.2108 22.6181 15.702 22.8289 15.1715 22.8289C14.6409 22.8289 14.1321 22.6181 13.757 22.243C13.3818 21.8678 13.1711 21.359 13.1711 20.8285C13.1711 20.5658 13.2228 20.3057 13.3234 20.063C13.4239 19.8203 13.5712 19.5997 13.757 19.414L15.879 17.293L18.707 20.121L16.586 22.243ZM20.829 13.173C21.2243 13.1733 21.6106 13.2907 21.9392 13.5104C22.2678 13.7301 22.524 14.0423 22.6753 14.4075C22.8266 14.7727 22.8663 15.1745 22.7893 15.5623C22.7124 15.95 22.5223 16.3062 22.243 16.586L20.121 18.707L17.293 15.879L19.414 13.757C19.5999 13.5715 19.8206 13.4245 20.0634 13.3243C20.3062 13.2241 20.5663 13.1727 20.829 13.173Z" fill="currentColor"/>
  </symbol>
  <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 58" id="results">
    <path d="M55 0H5C3.67441 0.00158786 2.40356 0.528882 1.46622 1.46622C0.528882 2.40356 0.00158786 3.67441 0 5V41C0.00158786 42.3256 0.528882 43.5964 1.46622 44.5338C2.40356 45.4711 3.67441 45.9984 5 46H21.867L21.117 52H20C19.4696 52 18.9609 52.2107 18.5858 52.5858C18.2107 52.9609 18 53.4696 18 54V56H16V58H44V56H42V54C42 53.4696 41.7893 52.9609 41.4142 52.5858C41.0391 52.2107 40.5304 52 40 52H38.883L38.133 46H55C56.3256 45.9984 57.5964 45.4711 58.5338 44.5338C59.4711 43.5964 59.9984 42.3256 60 41V5C59.9984 3.67441 59.4711 2.40356 58.5338 1.46622C57.5964 0.528882 56.3256 0.00158786 55 0ZM5 2H55C55.7957 2 56.5587 2.31607 57.1213 2.87868C57.6839 3.44129 58 4.20435 58 5V36H2V5C2 4.20435 2.31607 3.44129 2.87868 2.87868C3.44129 2.31607 4.20435 2 5 2ZM40 56H20V54H40V56ZM36.867 52H23.133L23.883 46H36.117L36.867 52ZM55 44H5C4.20435 44 3.44129 43.6839 2.87868 43.1213C2.31607 42.5587 2 41.7957 2 41V38H58V41C58 41.7957 57.6839 42.5587 57.1213 43.1213C56.5587 43.6839 55.7957 44 55 44Z" fill="currentColor"/>
    <path d="M53 41C53 41.5523 53.4477 42 54 42C54.5523 42 55 41.5523 55 41C55 40.4477 54.5523 40 54 40C53.4477 40 53 40.4477 53 41Z" fill="currentColor"/>
    <path d="M44.0855 9.32847C44.2958 9.11815 44.5811 9 44.8785 9H45C45.5523 9 46 8.55228 46 8C46 7.44772 45.5523 7 45 7H44C43.7348 7.00006 43.4805 7.10545 43.293 7.293L41 9.586C40.6095 9.97646 40.6095 10.6095 41 11C41.3905 11.3905 42.0235 11.3905 42.414 11L44.0855 9.32847Z" fill="currentColor"/>
    <path d="M51 6H49C48.4477 6 48 6.44772 48 7C48 7.55228 48.4477 8 49 8H51C51.5523 8 52 7.55228 52 7C52 6.44772 51.5523 6 51 6Z" fill="currentColor"/>
    <path d="M51 10H49C48.4477 10 48 10.4477 48 11C48 11.5523 48.4477 12 49 12H51C51.5523 12 52 11.5523 52 11C52 10.4477 51.5523 10 51 10Z" fill="currentColor"/>
    <path d="M42.414 26C42.0235 25.6095 41.3905 25.6095 41 26C40.6095 26.3904 40.6095 27.0235 41 27.414L43.293 29.707C43.4805 29.8945 43.7348 29.9999 44 30H45C45.5523 30 46 29.5523 46 29C46 28.4477 45.5523 28 45 28H44.8785C44.5811 28 44.2958 27.8818 44.0855 27.6715L42.414 26Z" fill="currentColor"/>
    <path d="M51 26H49C48.4477 26 48 26.4477 48 27C48 27.5523 48.4477 28 49 28H51C51.5523 28 52 27.5523 52 27C52 26.4477 51.5523 26 51 26Z" fill="currentColor"/>
    <path d="M51 30H49C48.4477 30 48 30.4477 48 31C48 31.5523 48.4477 32 49 32H51C51.5523 32 52 31.5523 52 31C52 30.4477 51.5523 30 51 30Z" fill="currentColor"/>
    <path d="M17.586 11C17.9765 11.3905 18.6095 11.3905 19 11C19.3905 10.6095 19.3905 9.97647 19 9.586L16.707 7.293C16.5195 7.10545 16.2652 7.00006 16 7H15C14.4477 7 14 7.44772 14 8C14 8.55228 14.4477 9 15 9H15.1215C15.4189 9 15.7042 9.11815 15.9145 9.32847L17.586 11Z" fill="currentColor"/>
    <path d="M11 6H9C8.44772 6 8 6.44772 8 7C8 7.55228 8.44772 8 9 8H11C11.5523 8 12 7.55228 12 7C12 6.44772 11.5523 6 11 6Z" fill="currentColor"/>
    <path d="M11 10H9C8.44772 10 8 10.4477 8 11C8 11.5523 8.44772 12 9 12H11C11.5523 12 12 11.5523 12 11C12 10.4477 11.5523 10 11 10Z" fill="currentColor"/>
    <path d="M16.707 29.707L19 27.414C19.3905 27.0235 19.3905 26.3904 19 26C18.6095 25.6095 17.9765 25.6095 17.586 26L15.9145 27.6715C15.7042 27.8818 15.4189 28 15.1215 28H15C14.4477 28 14 28.4477 14 29C14 29.5523 14.4477 30 15 30H16C16.2652 29.9999 16.5195 29.8945 16.707 29.707Z" fill="currentColor"/>
    <path d="M11 26H9C8.44772 26 8 26.4477 8 27C8 27.5523 8.44772 28 9 28H11C11.5523 28 12 27.5523 12 27C12 26.4477 11.5523 26 11 26Z" fill="currentColor"/>
    <path d="M11 30H9C8.44772 30 8 30.4477 8 31C8 31.5523 8.44772 32 9 32H11C11.5523 32 12 31.5523 12 31C12 30.4477 11.5523 30 11 30Z" fill="currentColor"/>
    <path d="M24 24H36C37.3261 24 38.5979 23.4732 39.5355 22.5355C40.4732 21.5979 41 20.3261 41 19C41 17.6739 40.4732 16.4021 39.5355 15.4645C38.5979 14.5268 37.3261 14 36 14H24C22.6739 14 21.4021 14.5268 20.4645 15.4645C19.5268 16.4021 19 17.6739 19 19C19 20.3261 19.5268 21.5979 20.4645 22.5355C21.4021 23.4732 22.6739 24 24 24ZM39 19C39 19.7956 38.6839 20.5587 38.1213 21.1213C37.5587 21.6839 36.7956 22 36 22H31V16H36C36.7956 16 37.5587 16.3161 38.1213 16.8787C38.6839 17.4413 39 18.2044 39 19ZM24 16H29V22H24C23.2044 22 22.4413 21.6839 21.8787 21.1213C21.3161 20.5587 21 19.7956 21 19C21 18.2044 21.3161 17.4413 21.8787 16.8787C22.4413 16.3161 23.2044 16 24 16Z" fill="currentColor"/>
  </symbol>
</svg>
`,
    }}
  />
);
