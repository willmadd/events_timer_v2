const files = [
    { id: "1", paid: false },
    { id: "2", paid: false },
    { id: "3", paid: false },
    { id: "4", paid: true },
    { id: "5", paid: true },
    { id: "6", paid: true },
    { id: "7", paid: true },
    { id: "8", paid: true },
];

export default files.map((file) => ({
    id: file.id,
    img: `${file.id}.jpg`,
    thumb: `${file.id}_thumb.webp`,
    paid: file.paid,
}));
