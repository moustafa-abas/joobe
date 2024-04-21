    import { useEffect, useState } from 'react';
    import axios from 'axios';
    export const Test = () => {
        const [tracks, setTracks] = useState([]);
        const [selectedTrack, setSelectedTrack] = useState(tracks[0])
        const handleChange=(e)=>{
            setSelectedTrack(e.target.value)
        }
        useEffect(() => {
        axios.get('https://jobee-5pfw.onrender.com/api/tracks')
            .then(response => {
            setTracks(response.data[0].tracks);
            setSelectedTrack(response.data[0].tracks[0]);
            })
            .catch(error => {
            console.error('حدث خطأ أثناء جلب التراكات:', error);
            });
        }, []);
        return (<>
        <select value={selectedTrack} onChange={handleChange}>
            {tracks.map((track) => (
                <option key={track} value={track}>{track}</option>
                        ))}
        </select>
    <button onClick={()=>{
        console.log(selectedTrack)
    }}>hhhhhhhhhhhhhh</button>
        </>
        );
    }