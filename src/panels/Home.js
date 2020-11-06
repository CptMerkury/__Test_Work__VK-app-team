import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

const Home = ({id, go, fetchedUser}) => {
        const getSexText = () => {
            switch (fetchedUser.sex) {
                case 1: return 'female';
                case 2: return 'male';
                default: return 'undef';
            }
        }
        return (
            <Panel id={id}>
                <PanelHeader>Example</PanelHeader>
                {fetchedUser &&
                <Group title="User Data Fetched with VK Bridge">
                    <Cell
                        before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
                        description=
                            {getSexText()}
                    >
                        {`${fetchedUser.last_name} ${fetchedUser.first_name}`}
                    </Cell>
                </Group>}
            </Panel>
        )
    }
;

Home.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    fetchedUser: PropTypes.shape({
        photo_200: PropTypes.string,
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        city: PropTypes.shape({
            title: PropTypes.string,
        }),
    }),
};

export default Home;
