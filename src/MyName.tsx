import React from 'react';

interface Props {
    name: string;
}

// const defaultProps: Props = {
//     name: 'justin'
// };

class MyName extends React.Component<Props> {
    render() {
        return (
            <div>
                안녕하세요! 제 이름은 <b>{this.props.name}</b>입니다.
            </div>
        );
    }
    static defaultProps = {
        name: 'lomeo'
    };
}

// const Myname: React.SFC<Props> = ({name= 'justin', children}) => {
//     return (
//         <div>
//             안녕하세요! 제 이름은 <b>{this.props.name}</b>입니다.
//         </div>
//     )
// };

export default MyName;