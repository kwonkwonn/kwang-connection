import MetaMaskConnect from '@/Functions/Metamask/ConnectMeta'
import Image from 'next/image'
import Footer from '@/app/Components/Footer/Footer'

export default function Home() {
  return (
    <section className='flex w-5/6 h-screen ml-auto mr-auto relative  gap-8' >

      <div className='w-4/6  bg-white '>
        <div className='flex flex-col mt-32 mb-12'>
        <Image  src="/KWbackground.jpeg" width={1000} height={400} alt=''></Image>
          </div>
          <p className='text-xl'>블록체인 기술을 활용하여 안전하고 효과적으로 세상을 연결합니다</p>
          </div>
      <div className='w-2/6  bg-white flex flex-col mt-32 justify-start gap-12'>
        <div className='flex flex-col'>
          <p className='text-5xl'>Kwang Connecting</p>
          <p>근황을 올리세요</p>
          <p>재밌는 사건들을 만들어 가세요</p>
          <p>사람들과 소통하세요</p>
          <p>여러분은 어떤 정보도 공유하지 않아도 괜찮습니다</p>
        </div>

      <div className='flex  flex-col    items-center gap-5'>
      
        <div className='flex gap-3 '>기존 계정이 있으신가요?
          <MetaMaskConnect/>
        </div>
        <div className='flex gap-3'>처음이신가요? 
          <button className="border rounded-xl border-black  hover:bg-white bg-red-300  p-1">회원가입하기</button> </div>
        </div>
      </div>
      <Footer/>

    </section>
  )
}
