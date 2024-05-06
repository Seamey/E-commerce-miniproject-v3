import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Privacy Policy of Shine SHOP ",
    openGraph: {
        type: "website",
        url: "https://istad.co",
        title: "Cambo Products",
        description: "Privacy Policy of Shine SHOP ",
    },
}
export default function page() {
    return (
        <main className='w-10/12 mx-auto leading-7 '>
            <h1 className='text-4xl text-center font-semibold my-6'>Privacy Policy</h1>
            <p className='text-[18px]'>
                Cambo Production Free Classifieds strives to offer its visitors the many advantages of internet technology and to provide an interactive and personalized experience. We may use Personally Identifiable Information (your name e-mail address street address telephone number) subject to the terms of this privacy policy. We will never sell barter or rent your email address to any unauthorized third party.
            </p>
            <p className='text-[18px]'> We recognizes the importance of protecting your privacy and our policy is designed to assist you in understanding how we collect use and safeguard the personal information you provide to us and to assist you in making informed decisions when using our site. This policy will be continuously assessed against new technologies business practices and our customers needs.</p>

            <h1 className='text-3xl font-semibold text-black my-6'>What Information Do We Collect?</h1>
            <h1 className='text-2xl font-semibold text-black my-6'>1. Personal Information You Choose to Provide</h1>
            <p className="text-[18px]">Registration Information: When you register for use of our website services you will provide us information about yourself such as Name Email phone number and Country.
                Personal Profile Information: Other Personally Identifiable Information that you voluntarily disclose in your Personal Profile page that is not required during registration.

                Register using your Google account: We collect first name last name profile picture and email address

                Register using your Facebook account: We collect first name last name profile picture and email address

                Register using your Apple ID: We collect first name last name and email address
            </p>
            <p>If you log in using your Facebook account or Google account or your Apple ID we use your first name and last name and your email address of such account as well as the URL to your profile picture (except for Apple ID) we use your first name and last name from your Facebook profile and the Facebook e-mail address to identify you as a user on our Platform and to provide you access to our Platform.
            </p>
            <h1 className='text-2xl font-semibold text-black my-6'>Affiliated sites linked sites and advertisements</h1>
            <p className="text-[18px]">
                Cambo Production Free Classifieds expects its partners advertisers and affiliates to respect the privacy of our users. Be aware however that third parties including our partners advertisers affiliates and other content providers accessible through our site may have their own privacy and data collection policies and practices. Cambo Production Free Classifieds is not responsible for the actions or policies of such third parties. You should check the applicable privacy policies of those third parties when providing information on a feature or page operated by a third party.

                While on our site our advertisers promotional partners or other third parties may use cookies or other technology to attempt to identify some of your preferences or retrieve information about you. For example some of our advertising is served by third parties and may include cookies that enable the advertiser to determine whether you have seen a particular advertisement before. Other features available on our site may offer services operated by third parties and may use cookies or other technology to gather information. Cambo Production Free Classifieds does not control the use of this technology by third parties or the resulting information and is not responsible for any actions or policies of such third parties.

                You should also be aware that if you voluntarily disclose Personally Identifiable Information on message boards or in Personal Profile page that information can be viewed publicly and can be collected and used by third parties without our knowledge and may result in unsolicited messages from other individuals or third parties. Such activities are beyond the control of Cambo Production Free Classifieds and this policy.
            </p>
            <h1 className='text-2xl font-semibold text-black my-6'>What About Other Web Sites Linked to Our Web Site?</h1>
            <p className='text-[20px]'>
                We are not responsible for the practices employed by Web sites linked to or from our Web site or the information or content contained therein. Often links to other Web sites are provided solely as pointers to information on topics that may be useful to the users of our Web site.

                Please remember that when you use a link to go from our Website to another web site our Privacy Policy is no longer in effect. Your browsing and interaction on any other web site including web sites which have a link on our Website is subject to that Web sites own rules and policies. Please read over those rules and policies before proceeding.

                Your Consent
                By using our Web site you consent to our collection and use of your personal information as described in this Privacy Policy. We reserve the right to amend this privacy policy at any time with or without notice.

                Your rights  data deletion requests
                To exercise your privacy rights and choices if you do not want us to process your data then you can contact Cambo Productions customer service to request data deletion.
            </p>
            <h1 className='text-2xl' font-semibold text-black my-6>Changes to this Policy</h1>
            <p className="text-[18px]">
                Cambo Production Free Classifieds reserves the right to change this policy at any time. Please check this page periodically for changes. Your continued use of our site following the posting of changes to these terms will mean you accept those changes. Information collected prior to the time any change is posted will be used according to the rules and laws that applied at the time the information was collected.

                Last Updated ( 2024 )
            </p>

        </main>
    )
}
