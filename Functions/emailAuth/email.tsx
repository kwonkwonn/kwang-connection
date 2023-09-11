import Modal from "@/app/Components/Modal/Modal";

function EmailAuth({modalUp}:{
    modalUp:any
}){

    return(
        <Modal modalUp={modalUp}>
            <div> 
                학교 매일로 랜덤넘버를 보내고 상대가 맞는 번호로 답장하면 인증하는 시스템 구현하기
            </div>
        </Modal>
    
        )


}


export default EmailAuth;