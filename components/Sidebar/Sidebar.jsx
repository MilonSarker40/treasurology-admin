import Link from 'next/link';
import Image from 'next/image';
import { useRouter} from 'next/router';
import React,{useState} from 'react';
import Logo from '../../public/images/logo.png'



const Sidebar = () => {

  const {asPath} =useRouter();
  const [blotterToggle, setBlotterToggle] = useState(false)
  const [contactsToggle, setContactsToggle] = useState(false)
  const [dealingToggle, setDealingToggle] = useState(false)
  const [fundToggle, setFundToggle] = useState(false)
  const [dealerToggle, setDealerToggle] = useState(false)
  const [reportToggle, setReportToggle] = useState(false)
  const [limitToggle, setLimitToggle] = useState(false)
  const [othersToggle, setOthersToggle] = useState(false)
  const [createToggle, setCreateToggle] = useState(false)

  return (
    <>
      <div className='left_sidebar clearfix'>
        <div className='logo'>
            <Link href='/dashboard'><Image src={Logo} width='150px' height='50px' alt='' /></Link>
        </div>
        <nav className='navbarMenu'>
            <h4>Liquidity Module</h4>
           <ul className='clearfix reset-list'>
              <li><Link href="/dashboard" className={asPath==='/dashboard' ? 'list active' : 'list'}><i class="ri-computer-line"></i>Dashboard</Link></li>
              <li>
                <Link onClick={() => setBlotterToggle(!blotterToggle)} href='#'><i class="ri-user-line"></i>Liquidity Blotter<span><i class="ri-arrow-down-s-line"></i></span></Link>
                {blotterToggle && (
                  <ul className='clearfix reset-list'>
                    <li><Link href="/money-market-deal" className={asPath==='/money-market-deal' ? 'list active' : 'list'}>Money Market Blotter</Link></li>
                    <li><Link href="/fx-blotter" className={asPath==='/fx-blotter' ? 'list active' : 'list'}>FX Blotter</Link></li>
                    <li><Link href="/securities-blotter" className={asPath==='/securities-blotter' ? 'list active' : 'list'}>Securities Blotter</Link></li>
                  </ul>
                )}
              </li>
              <li>
                <Link onClick={() => setContactsToggle(!contactsToggle)} href='#'><i class="ri-profile-line"></i>Contacts & Messaging<span><i class="ri-arrow-down-s-line"></i></span></Link>
                {contactsToggle && (
                <ul className='clearfix reset-list'>
                  <li><Link href="/contacts" className={asPath==='/contacts' ? 'list active' : 'list'}>Contacts</Link></li>
                  <li><Link href="/circle" className={asPath==='/circle' ? 'list active' : 'list'}>Messaging</Link></li>
                  <li><Link href="/messaging-history" className={asPath==='/messaging-history' ? 'list active' : 'list'}>Messaging History</Link></li>
                </ul>
                )}
              </li>
              <li>
                <Link onClick={() => setDealingToggle(!dealingToggle)} href='#'><i class="ri-router-line"></i>Dealing<span><i class="ri-arrow-down-s-line"></i></span></Link>
                {dealingToggle && (
                  <ul className='clearfix reset-list'>
                    <li className='create__deal'>
                      <Link onClick={() => setCreateToggle(!createToggle)} href='#'>Create Deal<span><i class="ri-arrow-down-s-line"></i></span></Link>
                      {createToggle &&(
                        <ul className='clearfix reset-list'>
                          <li><Link href="/money-market-deal" className={asPath==='/money-market-deal' ? 'list active' : 'list'}>Money Marketing Deal</Link></li>
                          <li><Link href="/" className={asPath==='/' ? 'list active' : 'list'}>FX Deal</Link></li>
                          <li><Link href="/" className={asPath==='/' ? 'list active' : 'list'}>Walking Customer FX Deal</Link></li>
                          <li><Link href="/" className={asPath==='/' ? 'list active' : 'list'}>Securities Deal</Link></li>
                          <li><Link href="/" className={asPath==='/' ? 'list active' : 'list'}>Repo/Reverse Repo Deal</Link></li>
                        </ul>
                      )}
                    </li>
                    <li><Link href="/" className={asPath==='/' ? 'list active' : 'list'}>OTC Order</Link></li>
                    <li><Link href="/" className={asPath==='/' ? 'list active' : 'list'}>Open Market Order</Link></li>
                    <li><Link href="/" className={asPath==='/' ? 'list active' : 'list'}>Incoming Order</Link></li>
                    <li><Link href="/" className={asPath==='/' ? 'list active' : 'list'}>All Deals</Link></li>
                    <li><Link href="/" className={asPath==='/' ? 'list active' : 'list'}>Deal Rollover</Link></li>
                  </ul>
                )}
              </li>
              <li>
                <Link onClick={() => setFundToggle(!fundToggle)} href='#'><i class="ri-file-text-fill"></i>Fund Settlement<span><i class="ri-arrow-down-s-line"></i></span></Link>
                {fundToggle && (
                  <ul className='clearfix reset-list'>
                    <li><Link href="/" className={asPath==='/' ? 'list active' : 'list'}>Payable On Maturity</Link></li>
                    <li><Link href="/" className={asPath==='/' ? 'list active' : 'list'}>Receivable on Maturity</Link></li>
                  </ul>
                )}
              </li>
              <li>
                <Link onClick={() => setDealerToggle(!dealerToggle)} href='#'><i class="ri-file-text-fill"></i>Dealer Profile<span><i class="ri-arrow-down-s-line"></i></span></Link>
                {dealerToggle &&(
                  <ul className='clearfix reset-list'>
                    <li><Link href="/edit-profile" className={asPath==='/edit-profile' ? 'list active' : 'list'}>Edit Profile</Link></li>
                    <li><Link href="/change-password" className={asPath==='/change-password' ? 'list active' : 'list'}>Change Password</Link></li>
                  </ul>
                )}
              </li>
              <li>
                <Link onClick={() => setReportToggle(!reportToggle)} href='#'><i class="ri-file-text-fill"></i>Report<span><i class="ri-arrow-down-s-line"></i></span></Link>
                {reportToggle &&(
                  <ul className='clearfix reset-list'>
                    <li><Link href="/agent-earning" className={asPath==='/agent-earning' ? 'list active' : 'list'}>Counterparty Limit Utilixation</Link></li>
                    <li><Link href="/agent-due" className={asPath==='/agent-due' ? 'list active' : 'list'}>Dealer Limit Utilization</Link></li>
                    <li><Link href="/agent-recharge" className={asPath==='/agent-recharge' ? 'list active' : 'list'}>Daily Deal Report</Link></li>
                    <li><Link href="/agent-recharge" className={asPath==='/agent-recharge' ? 'list active' : 'list'}>Money Market Position</Link></li>
                    <li><Link href="/agent-recharge" className={asPath==='/agent-recharge' ? 'list active' : 'list'}>Daily Average Deal</Link></li>
                    <li><Link href="/agent-recharge" className={asPath==='/agent-recharge' ? 'list active' : 'list'}>Money Market Deal Details</Link></li>
                    <li><Link href="/agent-recharge" className={asPath==='/agent-recharge' ? 'list active' : 'list'}>New L/C</Link></li>
                    <li><Link href="/agent-recharge" className={asPath==='/agent-recharge' ? 'list active' : 'list'}>Import Payment</Link></li>
                    <li><Link href="/agent-recharge" className={asPath==='/agent-recharge' ? 'list active' : 'list'}>Export Proceeds</Link></li>
                    <li><Link href="/agent-recharge" className={asPath==='/agent-recharge' ? 'list active' : 'list'}>Inward Remittance</Link></li>
                  </ul>
                )}
              </li>
              <li>
                <Link onClick={() => setLimitToggle(!limitToggle)} href='#'><i class="ri-file-text-fill"></i>Limit<span><i class="ri-arrow-down-s-line"></i></span></Link>
                {limitToggle &&(
                  <ul className='clearfix reset-list'>
                    <li><Link href="/agent-earning" className={asPath==='/agent-earning' ? 'list active' : 'list'}>Lending Limit</Link></li>
                    <li><Link href="/agent-due" className={asPath==='/agent-due' ? 'list active' : 'list'}>Borrowing Limit</Link></li>
                    <li><Link href="/agent-recharge" className={asPath==='/agent-recharge' ? 'list active' : 'list'}>Dealer Limit</Link></li>
                  </ul>
                )}
              </li>
              <li>
                <Link onClick={() => setOthersToggle(!othersToggle)} href='#'><i class="ri-file-text-fill"></i>Others<span><i class="ri-arrow-down-s-line"></i></span></Link>
                {othersToggle &&(
                  <ul className='clearfix reset-list'>
                    <li><Link href="/notifications" className={asPath==='/notifications' ? 'list active' : 'list'}>Notice Board</Link></li>
                    <li><Link href="/agent-due" className={asPath==='/agent-due' ? 'list active' : 'list'}>View All Holiday</Link></li>
                    <li><Link href="/agent-recharge" className={asPath==='/agent-recharge' ? 'list active' : 'list'}>Online User</Link></li>
                    <li><Link href="/agent-recharge" className={asPath==='/agent-recharge' ? 'list active' : 'list'}>All Contacts</Link></li>
                  </ul>
                )}
              </li>
              {/* <li><Link href="/datetime" className={asPath==='/datetime' ? 'list active' : 'list'}><i class="ri-radar-line"></i>DateTime</Link></li>
              <li><Link href="/settlement" className={asPath==='/settlement' ? 'list active' : 'list'}><i class="ri-radar-line"></i>Settlement</Link></li>
              <li><Link href="/indexapi" className={asPath==='/indexapi' ? 'list active' : 'list'}><i class="ri-file-text-line"></i>Api Index</Link></li>
              <li><Link href="/simulator" className={asPath==='/simulator' ? 'list active' : 'list'}><i class="ri-pages-fill"></i>Simulator</Link></li>
              <li><Link href="/testcomponents" className={asPath==='/testcomponents' ? 'list active' : 'list'}><i class="ri-settings-3-fill"></i>Testcomponents</Link></li> */}
           </ul>
        </nav>
      </div>
    </>
  )
}

export default Sidebar