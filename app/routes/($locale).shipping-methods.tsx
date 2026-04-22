import {Link} from '~/components';

export default function ShippingMethods() {
  return (
    <>
      <div className="justify-center text-174860">
        <div className="lg:flex lg:flex-row">
          <div className="basis-full lg:basis-9/12 py-[140px]">
            <div className="max-w-[880px] mx-auto my-0 px-8">
              <h1 className="text-5xl font-semibold my-8">
                How to receive your Magniflex product
              </h1>

              <div className="space-y-6 text-[#212529] leading-7">
                <p>
                  Magniflex shipments are free within the United States.
                </p>

                <p>
                  Orders are processed Monday through Friday (excluding holidays).
                  Once your order has been processed, you will receive a
                  confirmation email.
                </p>

                <p>
                  Delivery times vary depending on product category and
                  availability. Products in stock are shipped within 48 hours of
                  order confirmation.
                </p>

                <div className="rounded-lg border border-[#e5e7eb] bg-white p-5 md:p-6">
                  <p className="font-semibold text-dark-blue mb-3">
                    For assistance regarding your order, please contact:
                  </p>
                  <p>
                    <span className="font-semibold">Phone:</span>{' '}
                    <a
                      href="tel:+17862338805"
                      className="text-dark-blue underline hover:text-B09987 transition"
                    >
                      (786) 233-8805
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold">Email:</span>{' '}
                    <a
                      href="mailto:orders@magniflex.us"
                      className="text-dark-blue underline hover:text-B09987 transition"
                    >
                      orders@magniflex.us
                    </a>
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-semibold mt-14 mb-6">
                Delivery Times by Product Category
              </h2>

              <div className="grid gap-4">
                <section className="rounded-lg border border-[#e5e7eb] bg-[#fafafa] p-5 md:p-6">
                  <h3 className="text-xl font-semibold text-dark-blue mb-2">
                    MATTRESSES AND PILLOW
                  </h3>
                  <p className="text-[#212529] leading-7">
                    In-stock products ship within 48 hours of order confirmation.
                    Out-of-stock products ship within 4 weeks.
                  </p>
                </section>

                <section className="rounded-lg border border-[#e5e7eb] bg-[#fafafa] p-5 md:p-6">
                  <h3 className="text-xl font-semibold text-dark-blue mb-2">
                    KIT FOUNDATION
                  </h3>
                  <p className="text-[#212529] leading-7">
                    Ships within 2–4 business days.
                  </p>
                </section>

                <section className="rounded-lg border border-[#e5e7eb] bg-[#fafafa] p-5 md:p-6">
                  <h3 className="text-xl font-semibold text-dark-blue mb-2">
                    ADJUSTABLE BASE
                  </h3>
                  <p className="text-[#212529] leading-7">
                    Ships within 4–5 business days.
                  </p>
                </section>

                <section className="rounded-lg border border-[#e5e7eb] bg-[#fafafa] p-5 md:p-6">
                  <h3 className="text-xl font-semibold text-dark-blue mb-2">
                    TOPPERS
                  </h3>
                  <p className="text-[#212529] leading-7">
                    Ships within 24 hours.
                  </p>
                </section>

                <section className="rounded-lg border border-[#e5e7eb] bg-[#fafafa] p-5 md:p-6">
                  <h3 className="text-xl font-semibold text-dark-blue mb-2">
                    SHEETS
                  </h3>
                  <p className="text-[#212529] leading-7">
                    Ships within 48 hours.
                  </p>
                </section>
              </div>
            </div>
          </div>

          <aside className="basis-full lg:basis-3/12 bg-f7 py-12 lg:py-[140px] px-12">
            <div className="sticky py-4 top-[118px]">
              <ul>
                <li className="py-2 mb-2 border-[#dee2e6] border-b">
                  <Link to="/warranty">Warranty</Link>
                </li>
                <li className="py-2 mb-2 border-[#dee2e6] border-b text-B09987 active">
                  <Link to="/shipping-methods">Shipping methods</Link>
                </li>
                <li className="py-2 mb-2 border-[#dee2e6] border-b">
                  <Link to="/return-policy">Return policy</Link>
                </li>
                {/* <li className="py-2 mb-2 border-[#dee2e6] border-b">
                  <Link to="/terms-of-use">Terms of use</Link>
                </li> */}
                <li className="py-2 mb-2 border-[#dee2e6] border-b">
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li className="py-2 mb-2 border-[#dee2e6] border-b">
                  <Link to="/cookies">Cookies</Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
