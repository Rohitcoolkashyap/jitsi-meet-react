import React, { Component } from 'react';

import { FilmStrip } from '../../filmStrip';
import { LargeVideo } from '../../largeVideo';
import { Toolbar } from '../../toolbar';

import { ConferenceContainer } from './_';

/**
 * The conference page of the application.
 */
class Conference extends Component {
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {XML}
     */
    render() {
        return (
            <ConferenceContainer>
                <LargeVideo/>
                <Toolbar navigator = { this.props.navigator }/>
                <FilmStrip/>
            </ConferenceContainer>
        );
    }
}

/**
 * Conference component's property types.
 *
 * Ensure that the application navigator object is passed down via props on
 * mobile.
 *
 * @static
 */
Conference.propTypes = {
    navigator: React.PropTypes.object,
    participants: React.PropTypes.object
};

export default Conference;
