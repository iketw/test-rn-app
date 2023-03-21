export function formatDisplayUri(uri, links) {
    const encodedUri = encodeURIComponent(uri);
    return links.universal
        ? `${links.universal}/wc?uri=${encodedUri}`
        : links.native
            ? `${links.native}${links.native.endsWith(":") ? "//" : "/"}wc?uri=${encodedUri}`
            : `${uri}`;
}
