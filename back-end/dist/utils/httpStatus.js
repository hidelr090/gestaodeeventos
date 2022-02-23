export const badRequest = (res, message) => {
    return res.status(400).json({ message: message });
};
export const unauthorized = (res, message) => {
    return res.status(401).json({ message: message });
};
export const notFound = (res, message) => {
    return res.status(404).json({ message: message });
};
export const conflict = (res, message) => {
    return res.status(409).json({ message: message });
};
export const internalServerError = (res, message) => {
    return res.status(500).json({ message: message });
};
export const ok = (res, message) => {
    return res.status(200).json({ message: message });
};
