

const MailBoxForm = () => {
return (
    <>
    <h2>New MailBox</h2>
    <form>
     <label for='boxOwner'>Enter a Boxholder</label>
     <input type="text" name="boxOwner" id="boxOwner"required/>
     <label>Select a Box Size</label>
     <select id="boxSize" name="boxSize" required>
        <option value='boxSize'>Small</option>
        <option value='boxSize'>Medium</option>
        <option value='boxSize'>Large</option>
     </select>
     <button onClick={() => handleAddBox(newBox)}>Submit</button>
    </form>

    </>
)
}

export default MailBoxForm;