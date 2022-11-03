import * as React from 'react';

import { faker } from '@faker-js/faker';

export class Card extends React.Component {
    render() {

        return (

            <div className="ui card">
                <div className="image">
                    <img alt="avatar" src={faker.image.avatar()} />
                </div>
                <div className="content">
                    <a className="header">{faker.name.fullName()}</a>
                    <div className="meta">
                        <span className="date">Joined in {faker.date.future().toDateString()}</span>
                    </div>
                    <div className="description">
                        {faker.company.name()}
                    </div>
                </div>
                <div className="extra content">
                    <a>
                        <i className="user icon"></i>
                        22 Friends
                    </a>
                </div>
            </div>

        );
    }
}

export default Card;