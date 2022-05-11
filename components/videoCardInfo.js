export default function VideoCardInfo({ item }) {
    return (
        <>
            <div key={item.id}>
                <div className="card-info">
                    <h3>{item.title} ({item.acf.age})</h3>
                    <span>{item.acf.speciality}, {item.acf.arbeidsgiver}</span>
                </div>
            </div>
        </>
    );
}
