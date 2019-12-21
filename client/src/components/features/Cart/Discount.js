import React from 'react';
import Alert from '../../common/Alert/Alert';

class Discount extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            isTrue: true,
        }
    }

    handleChange = (event) => {
        this.setState({
            input: event.target.value
        })
    }

    handleSubmit = () => {
        const { AddDiscount, discountStatus } = this.props;
        const discountCode = 'xmas';

        if(discountStatus === false) {
            if(discountCode === this.state.input) {
                AddDiscount();
            } else {
                this.setState({
                    isTrue: false
                })
            }
        }        
    }

    render() {
        
        const { input, isTrue } = this.state;
        const { discountStatus } = this.props;
        const { handleChange, handleSubmit } = this;        

        if(discountStatus === false && isTrue === true) {
            return(
                <div className='discount-code'>
                    <Label>Enter 'coscrafts' to get a 10% discount for your first order!</Label>
                    <div className='discount-code-input'>
                        <Input placeholder='discount code' type='text' input={ input } onChange={ handleChange }></Input>
                        <Button variant='primary' onClick={ handleSubmit }>Continue</Button>
                    </div>
                </div>
            );

        } else if (discountStatus === false  && isTrue === false) {
            return(
                <Alert variant='error'>Wrong code!</Alert>
            );

        } else if (discountStatus === true) {
            return(
                <Alert variant='success'>The code is active</Alert>
            );
        } else {
            return <Alert variant='error'>Something go wrong</Alert>
        }
        
    }
}

export default Discount;