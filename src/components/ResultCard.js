import moment from 'moment'

export const ResultCard = ({ movie }) => (
    <div className="result-card">
        <div className="poster-wrapper">
            {movie.poster_path ? (
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`} />
            ) : (
                <div className="filler-poster" />
            )}
        </div>
        <div className="info">
            <div className="header">
                <h3 className="title">{movie.title}</h3>
                {!!movie.release_date ? (
                    <h4 className="release-date">Data de lançamento: <b>{moment(movie.release_date).format('L')}</b></h4>
                ) : (
                    <h4 className="release-date">Sem informações sobre a data de lançamento 😭</h4>
                )}
            </div>
            <div className="controls">
                <button className="btn">
                    Adicionar
                </button>
            </div>
        </div>
    </div>
);
