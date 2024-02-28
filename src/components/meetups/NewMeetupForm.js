import classes from "./NewMeetupForm.module.css"
import Card from "../ui/Card"

import {useRef} from 'react';

let NewMeetupForm=(props)=>{
    const titleInputRef=useRef()
    const ImageInputRef=useRef()
    const AddressInputRef=useRef()
    const DescriptionInputRef=useRef()

    function submitHandler(event){
        event.preventDefault()

        const enteredTitle=titleInputRef.current.value
        const enteredImage=ImageInputRef.current.value
        const enteredAddress=AddressInputRef.current.value
        const enteredDescription=DescriptionInputRef.current.value

        let meetupData={title:enteredTitle,image:enteredImage,address:enteredAddress,description:enteredDescription}
        props.onAddMeetup(meetupData)
        console.log(meetupData)
    }
    return(
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type='text' required id='title' ref={titleInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input type='url' required id='image' ref={ImageInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Address</label>
                    <input type='text' required id='address' ref={AddressInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea required id='description' rows='5' ref={DescriptionInputRef}/>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm;