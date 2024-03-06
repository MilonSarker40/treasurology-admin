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
                    <li><Link href="/money-market-blotter" className={asPath==='/money-market-blotter' ? 'list active' : 'list'}>Money Market Blotter</Link></li>
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
                  <li><Link href="/" className={asPath==='/' ? 'list active' : 'list'}>Messaging</Link></li>
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
                          <li><Link href="/fx-deal" className={asPath==='/fx-deal' ? 'list active' : 'list'}>FX Deal</Link></li>
                          <li><Link href="/walking-customer-fx-deal" className={asPath==='/walking-customer-fx-deal' ? 'list active' : 'list'}>Walking Customer FX Deal</Link></li>
                          <li><Link href="/securities-deal" className={asPath==='/securities-deal' ? 'list active' : 'list'}>Securities Deal</Link></li>
                          <li><Link href="/reverse-repo-deal" className={asPath==='/reverse-repo-deal' ? 'list active' : 'list'}>Repo/Reverse Repo Deal</Link></li>
                        </ul>
                      )}
                    </li>
                    <li><Link href="/otc-order" className={asPath==='/otc-order' ? 'list active' : 'list'}>OTC Order</Link></li>
                    <li><Link href="/open-market-order" className={asPath==='/open-market-order' ? 'list active' : 'list'}>Open Market Order</Link></li>
                    <li><Link href="/incoming-order" className={asPath==='/incoming-order' ? 'list active' : 'list'}>Incoming Order</Link></li>
                    <li><Link href="/all-deals" className={asPath==='/all-deals' ? 'list active' : 'list'}>All Deals</Link></li>
                    <li><Link href="/deal-rollover" className={asPath==='/deal-rollover' ? 'list active' : 'list'}>Deal Rollover</Link></li>
                    <li><Link href="/deal-revision-request" className={asPath==='/deal-revision-request' ? 'list active' : 'list'}>Deal Revision Request</Link></li>
                    <li><Link href="/deal-cancellation-request" className={asPath==='/deal-cancellation-request' ? 'list active' : 'list'}>deal Cancellation Request</Link></li>
                    <li><Link href="/overdue-deal" className={asPath==='/overdue-deal' ? 'list active' : 'list'}>Overdue Deals</Link></li>
                  </ul>
                )}
              </li>
              <li>
                <Link onClick={() => setFundToggle(!fundToggle)} href='#'><i class="ri-file-text-fill"></i>Fund Settlement<span><i class="ri-arrow-down-s-line"></i></span></Link>
                {fundToggle && (
                  <ul className='clearfix reset-list'>
                    <li><Link href="/payable-maturity" className={asPath==='/payable-maturity' ? 'list active' : 'list'}>Payable On Maturity</Link></li>
                    <li><Link href="/receivable-maturity" className={asPath==='/receivable-maturity' ? 'list active' : 'list'}>Receivable on Maturity</Link></li>
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
                    <li><Link href="/counterparty-limit-utilization" className={asPath==='/counterparty-limit-utilization' ? 'list active' : 'list'}>Counterparty Limit Utilixation</Link></li>
                    <li><Link href="/dealer-limit-utilization" className={asPath==='/dealer-limit-utilization' ? 'list active' : 'list'}>Dealer Limit Utilization</Link></li>
                    <li><Link href="/daily-deal" className={asPath==='/daily-deal' ? 'list active' : 'list'}>Daily Deal Report</Link></li>
                    <li><Link href="/money-market-position" className={asPath==='/money-market-position' ? 'list active' : 'list'}>Money Market Position</Link></li>
                    <li><Link href="/daily-average-deal" className={asPath==='/daily-average-deal' ? 'list active' : 'list'}>Daily Average Deal</Link></li>
                    <li><Link href="/money-market-deal-details-report" className={asPath==='/money-market-deal-details-report' ? 'list active' : 'list'}>Money Market Deal Details</Link></li>
                    <li><Link href="/report-new-lc" className={asPath==='/report-new-lc' ? 'list active' : 'list'}>New L/C</Link></li>
                    <li><Link href="/import-payment" className={asPath==='/import-payment' ? 'list active' : 'list'}>Import Payment</Link></li>
                    <li><Link href="/export-proceed" className={asPath==='/export-proceed' ? 'list active' : 'list'}>Export Proceeds</Link></li>
                    <li><Link href="/inward-remittance" className={asPath==='/inward-remittance' ? 'list active' : 'list'}>Inward Remittance</Link></li>
                  </ul>
                )}
              </li>
              <li>
                <Link onClick={() => setLimitToggle(!limitToggle)} href='#'><i class="ri-file-text-fill"></i>Limit<span><i class="ri-arrow-down-s-line"></i></span></Link>
                {limitToggle &&(
                  <ul className='clearfix reset-list'>
                    <li><Link href="/lending-limit" className={asPath==='/lending-limit' ? 'list active' : 'list'}>Lending Limit</Link></li>
                    <li><Link href="/borrowing-limit" className={asPath==='/borrowing-limit'? 'list active' : 'list'}>Borrowing Limit</Link></li>
                    <li><Link href="/dealer-limit" className={asPath==='/dealer-limit' ? 'list active' : 'list'}>Dealer Limit</Link></li>
                  </ul>
                )}
              </li>
              <li>
                <Link onClick={() => setOthersToggle(!othersToggle)} href='#'><i class="ri-file-text-fill"></i>Others<span><i class="ri-arrow-down-s-line"></i></span></Link>
                {othersToggle &&(
                  <ul className='clearfix reset-list'>
                    <li><Link href="/notice-board" className={asPath==='/notice-board' ? 'list active' : 'list'}>Notice Board</Link></li>
                    <li><Link href="/all-holiday" className={asPath==='/all-holiday' ? 'list active' : 'list'}>View All Holiday</Link></li>
                    <li><Link href="/online-user" className={asPath==='/online-user' ? 'list active' : 'list'}>Online User</Link></li>
                    <li><Link href="/all-contacts" className={asPath==='/all-contacts' ? 'list active' : 'list'}>All Contacts</Link></li>
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
