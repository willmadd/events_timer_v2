const files = ['1', '2']

export default files.map(file=>(
    {
        id:file,
        img:`${file}.jpg`,
        thumb:`${file}_thumb.jpg`
    }

))
