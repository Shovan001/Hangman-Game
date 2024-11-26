import Button from "../Button/MyButton";
import TextInput from "../TextInput/TextInput";

function TextInputForm({inputType, handleFormSubmit, handleTextInputChange, handleShowHideClick}){

    return(
        <form onSubmit={handleFormSubmit}>
            <div>
                <TextInput
                    type={inputType}
                    label="Enter a word or phrase here"
                    placeholder="Enter a word or phrase here..."
                    onChangeHandler={handleTextInputChange}
                />
            </div>

            <div>
                <Button
                    styleType="warning"
                    text={inputType == "password" ? "Show" : "Hide"}
                    onClickHandler={handleShowHideClick}
                />
            </div>
                <Button
                    type="submit"
                    styleType="primary"
                    text= "Submit"
                />
            <div>

            </div>
        </form>
    )
}

export default TextInputForm;