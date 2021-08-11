import React, { Component } from 'react';

class SingleMovie extends Component {
    render() {
        return (
            <div>
                {this.props.profiles.map(profile => {
                    const movie = this.props.movies[profile.favoriteMovieID].name;
                    const watcher = this.props.users[profile.userID].name;
                    return (
                        <div>
                            <h2>{movie}</h2>
                            <p>users watch this film:</p>
                            <ul>
                                <li>{watcher}</li>
                            </ul>
                        </div>
                    )
                })
                }
            </div>
        )
    }
}

export default SingleMovie