const files = [
    { id: "16", paid: false },
    { id: "2", paid: false },
    { id: "17", paid: false },
    { id: "4", paid: true },
    { id: "5", paid: true },
    { id: "6", paid: true },
    { id: "7", paid: true },
    { id: "8", paid: true },
    { id: "9", paid: true },
    { id: "10", paid: true },
    { id: "11", paid: true },
    { id: "13", paid: true },
    { id: "14", paid: true },
    { id: "15", paid: true },
    // { id: "16", paid: true },
    // { id: "17", paid: true },
    { id: "18", paid: true },
    { id: "19", paid: true },
    { id: "20", paid: true },
];

export default files.map((file) => ({
    id: file.id,
    img: `${file.id}.jpg`,
    thumb: `${file.id}_thumb.webp`,
    paid: file.paid,
}));
