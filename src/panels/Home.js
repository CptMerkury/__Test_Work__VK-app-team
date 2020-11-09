import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import {Div, Search} from "@vkontakte/vkui";

const Home = ({id, fetchedUser, friendList}) => {

    const getSexText = (prop) => {
        switch (prop.sex) {
            case 1:
                return 'Female';
            case 2:
                return 'Male';
            default:
                return 'Undef';
        }
    }
    const getAge = (dateString) => {
        let birth = new Date(dateString);
        let now = new Date();
        let beforeBirth = ((() => {
            birth.setDate(now.getDate());
            birth.setMonth(now.getMonth());
            return birth.getTime()
        })() < birth.getTime()) ? 0 : 1;
        return now.getFullYear() - birth.getFullYear() - beforeBirth;
    }
    const getAnimalsContent = prop => prop.map(item => (
        <Cell before={item.photo_200 ? <Avatar src={item.photo_200}/> : null}
              description={`${getSexText(item)} ${getAge(item.bdate)}`}>
            {`${item.last_name} ${item.first_name}`}
        </Cell>

    ));
    return (
        <Panel id={id}>
            <PanelHeader>Searching</PanelHeader>
            <Group>
                <Search/>
            </Group>
            {fetchedUser && friendList &&
            <Group title="User Data Fetched with VK Bridge">
                <Cell before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
                      description={`${getSexText(fetchedUser)} ${getAge(fetchedUser.bdate)}`}>
                    {`${fetchedUser.last_name} ${fetchedUser.first_name}`}
                </Cell>
                {getAnimalsContent(friendList)}
            </Group>}
        </Panel>
    )
};


export default Home;
