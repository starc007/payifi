import React from 'react'
import Header from '../components/Navbar';

const AboutUs = () => {
    return (
			<div className="h-full">
				<div className="h-16">
					<Header />
				</div>
				<div>
					<div className="parallax">
						<div className="w-1/2 p-5">
							<label className="text-4xl font-bold">Our Story</label>
							<p className="font-medium text-base">
								India's current mottos are "financial inclusion" and
								"AatmaNirbharta". Our story starts at the cusp of these two
								ideologies. Lakhs of hard-working people in the unorganized
								retail sector form the backbone of India's economy. Whether in a
								village, town or a large city, shopkeepers and kirana store
								owners have been unable to join the digital revolution because
								of factors like lack of awareness, knowledge and proper fintech
								support. This is the problem Pay1 was built to address.
								Established by a team of professionals with decades of
								experience in the BFSI industry, Pay1 focuses on developing
								insights into the deep market potential of the financial
								transaction and financial technology space in India. We aim to
								lead this pool of persevering small-scale entrepreneurs into a
								financially inclusive, financially stronger future.
							</p>
						</div>
					</div>
					<div className="bg-gray-600 h-48"></div>
					<div className="bg-red-600 h-48"></div>
					<div className="bg-blue-600 h-48"></div>
					<div className="bg-gray-600 h-48"></div>
				</div>
			</div>
		);
}

export default AboutUs
