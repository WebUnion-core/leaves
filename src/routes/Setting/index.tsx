import React from 'react';
import { SettingStore } from './../../types/Setting';
import './style.scss';

// ui
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

interface Props {
    settingStore: SettingStore;
    dispatch: Function;
}

export default class Home extends React.Component<Props, object> {
    // 选择选项
    handleChange = (event: any) => {
        const target = event.target as HTMLTextAreaElement;
        this.props.dispatch({
            type: 'SET_THEME',
            theme: target.value,
        });
    }

    render() {
        const { theme } = this.props.settingStore;

        return (
            <div className={`setting-container ${theme}`}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Choice theme style: </FormLabel>
                    <RadioGroup
                        aria-label="gender"
                        name="theme"
                        value={ theme }
                        onChange={ this.handleChange }
                    >
                        <FormControlLabel
                            value="day"
                            control={<Radio />}
                            label="Day"
                            labelPlacement="start"
                        />
                        <FormControlLabel
                            value="night"
                            control={<Radio />}
                            label="Night"
                            labelPlacement="start"
                        />
                    </RadioGroup>
                    <FormHelperText>You can set your theme here. </FormHelperText>
                </FormControl>
            </div>
        );
    }
}
