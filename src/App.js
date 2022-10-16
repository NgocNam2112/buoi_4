/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";

function App() {
  return (
    <div className="d-flex">
      <nav className="navbar navbar-vertical bg-dark navbar-dark w-20 h-screen overflow-auto scroll-navbar">
        <div className="flex-column w-100 align-items-center">
          <a
            href="#"
            className="navbar-brand mb-4 d-flex justify-content-center mt-4"
          >
            <img
              src="https://d33wubrfki0l68.cloudfront.net/55307694d1a6b107d2d87c838a1aaede85cd3d84/66f18/assets/images/logo-dark.svg"
              alt="logo"
              className="navbar-brand-img logo-light logo-large"
            />
          </a>
          <div
            className="collapse navbar-collapse d-flex flex-column pb-4"
            id="sidenavCollapse"
          >
            <ul className="navbar-nav mb-lg-7 d-flex flex-column">
              <li className="dropdown nav-item px-2 py-1">
                <a
                  data-toggle="collapse"
                  href="#dashboardCollapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="dashboardCollapse"
                  className="nav-link d-flex align-items-center"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="nav-link-icon"
                    height={18}
                    width={18}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.753,13.944v8.25h6v-6a1.5,1.5,0,0,1,1.5-1.5h1.5a1.5,1.5,0,0,1,1.5,1.5v6h6v-8.25"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M.753,12.444,10.942,2.255a1.5,1.5,0,0,1,2.122,0L23.253,12.444"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <span className="ml-2">
                    <span className="mr-2">Dashboards</span>{" "}
                    <i className="fa-sharp fa-solid fa-angle-down" />
                  </span>
                </a>
                <div className="collapse" id="dashboardCollapse">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a href="#" className="nav-link active">
                        Default
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link ">
                        E-commerce
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="dropdown nav-item px-2 py-1">
                <a
                  data-toggle="collapse"
                  href="#pagesCollapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="pagesCollapse"
                  className="nav-link d-flex align-items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="nav-link-icon"
                    height={18}
                    width={18}
                  >
                    <defs>
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            ".a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;}",
                        }}
                      />
                    </defs>
                    <title>common-file-double-1</title>
                    <path
                      className="a"
                      d="M17.25,23.25H3.75a1.5,1.5,0,0,1-1.5-1.5V5.25"
                    />
                    <rect
                      className="a"
                      x="5.25"
                      y="0.75"
                      width="16.5"
                      height="19.5"
                      rx={1}
                      ry={1}
                    />
                  </svg>
                  <span>
                    <span className="mx-2">Pages</span>{" "}
                    <i className="fa-sharp fa-solid fa-angle-down" />
                  </span>
                </a>
                <div className="collapse" id="pagesCollapse">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a href="#" className="nav-link ">
                        Account
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link ">
                        User
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link ">
                        Pricing
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link ">
                        Wizard
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link ">
                        Help Center
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link ">
                        Invoice
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link ">
                        API Keys
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link ">
                        Maintenance
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item px-2 py-1">
                <a className="nav-link " href="#">
                  <svg
                    viewBox="0 0 24 24"
                    className="nav-link-icon"
                    height={18}
                    width={18}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.25,18.75a1.5,1.5,0,0,1-1.5-1.5V9.75a1.5,1.5,0,0,1,1.5-1.5h10.5a1.5,1.5,0,0,1,1.5,1.5v7.5a1.5,1.5,0,0,1-1.5,1.5h-1.5v4.5l-4.5-4.5Z"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M6.75,12.75l-3,3v-4.5H2.25a1.5,1.5,0,0,1-1.5-1.5V2.25A1.5,1.5,0,0,1,2.25.75h10.5a1.5,1.5,0,0,1,1.5,1.5v3"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <span className="mx-2">Chat</span>
                </a>
              </li>
              <li className="nav-item px-2 py-1">
                <a className="nav-link " href="#">
                  <svg
                    viewBox="0 0 24 24"
                    className="nav-link-icon"
                    height={18}
                    width={18}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.25,18.75a1.5,1.5,0,0,1-1.5-1.5V9.75a1.5,1.5,0,0,1,1.5-1.5h10.5a1.5,1.5,0,0,1,1.5,1.5v7.5a1.5,1.5,0,0,1-1.5,1.5h-1.5v4.5l-4.5-4.5Z"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M6.75,12.75l-3,3v-4.5H2.25a1.5,1.5,0,0,1-1.5-1.5V2.25A1.5,1.5,0,0,1,2.25.75h10.5a1.5,1.5,0,0,1,1.5,1.5v3"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <span className="mx-2">Calendar</span>
                </a>
              </li>
              <li className="nav-item px-2 py-1">
                <a
                  data-toggle="collapse"
                  href="#emailCollapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="emailCollapse"
                  className="nav-link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="nav-link-icon"
                    height={18}
                    width={18}
                  >
                    <defs>
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            ".a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;}",
                        }}
                      />
                    </defs>
                    <title>envelope</title>
                    <rect
                      className="a"
                      x="0.75"
                      y="4.5"
                      width="22.5"
                      height={15}
                      rx="1.5"
                      ry="1.5"
                    />
                    <line
                      className="a"
                      x1="15.687"
                      y1="9.975"
                      x2="19.5"
                      y2="13.5"
                    />
                    <line
                      className="a"
                      x1="8.313"
                      y1="9.975"
                      x2="4.5"
                      y2="13.5"
                    />
                    <path
                      className="a"
                      d="M22.88,5.014l-9.513,6.56a2.406,2.406,0,0,1-2.734,0L1.12,5.014"
                    />
                  </svg>
                  <span className="ml-2">
                    <span className="mr-2">Email</span>
                    <i className="fa-sharp fa-solid fa-angle-down" />
                  </span>
                </a>
                <div className="collapse" id="emailCollapse">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a href="./inbox.html" className="nav-link ">
                        Inbox
                        <span className="badge badge-light">4</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="./read-email.html" className="nav-link ">
                        Read Email
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="dropdown nav-item px-2 py-1">
                <a
                  data-toggle="collapse"
                  href="#taskCollapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="taskCollapse"
                  className="nav-link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="nav-link-icon"
                    height={18}
                    width={18}
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M5.25 10.511H10.5"
                    />
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M5.25 14.261H8.25"
                    />
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M5.25 18.011H8.25"
                    />
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M9.75 23.25H2.25C1.85218 23.25 1.47064 23.092 1.18934 22.8107C0.908035 22.5294 0.75 22.1478 0.75 21.75V6C0.75 5.60218 0.908035 5.22064 1.18934 4.93934C1.47064 4.65804 1.85218 4.5 2.25 4.5H6C6 3.50544 6.39509 2.55161 7.09835 1.84835C7.80161 1.14509 8.75544 0.75 9.75 0.75C10.7446 0.75 11.6984 1.14509 12.4017 1.84835C13.1049 2.55161 13.5 3.50544 13.5 4.5H17.25C17.6478 4.5 18.0294 4.65804 18.3107 4.93934C18.592 5.22064 18.75 5.60218 18.75 6V8.25"
                    />
                    <path
                      stroke="currentColor"
                      strokeWidth="1.5"
                      d="M9.75 4.51099C9.54289 4.51099 9.375 4.34309 9.375 4.13599C9.375 3.92888 9.54289 3.76099 9.75 3.76099"
                    />
                    <path
                      stroke="currentColor"
                      strokeWidth="1.5"
                      d="M9.75 4.51099C9.95711 4.51099 10.125 4.34309 10.125 4.13599C10.125 3.92888 9.95711 3.76099 9.75 3.76099"
                    />
                    <g>
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M17.25 23.25C20.5637 23.25 23.25 20.5637 23.25 17.25C23.25 13.9363 20.5637 11.25 17.25 11.25C13.9363 11.25 11.25 13.9363 11.25 17.25C11.25 20.5637 13.9363 23.25 17.25 23.25Z"
                      />
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M19.9239 15.505L17.0189 19.379C16.9543 19.4649 16.8721 19.536 16.7776 19.5873C16.6832 19.6387 16.5789 19.6692 16.4717 19.6768C16.3645 19.6844 16.2569 19.6689 16.1562 19.6313C16.0555 19.5937 15.964 19.535 15.8879 19.459L14.3879 17.959"
                      />
                    </g>
                  </svg>
                  <span className="ml-2">
                    <span className="mr-2">Tasks</span>{" "}
                    <i className="fa-sharp fa-solid fa-angle-down" />
                  </span>
                </a>
                <div className="collapse" id="taskCollapse">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a href="./kanban-board.html" className="nav-link ">
                        Kanban Board
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="./task-details.html" className="nav-link ">
                        Task Details
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item px-2 py-1">
                <a className="nav-link " href="#">
                  <svg
                    viewBox="0 0 24 24"
                    className="nav-link-icon"
                    height={18}
                    width={18}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.25,9.75v-3a1.5,1.5,0,0,0-1.5-1.5H8.25V3.75a1.5,1.5,0,0,0-1.5-1.5H2.25a1.5,1.5,0,0,0-1.5,1.5v16.3a1.7,1.7,0,0,0,3.336.438l2.351-9.657A1.5,1.5,0,0,1,7.879,9.75H21.75A1.5,1.5,0,0,1,23.2,11.636l-2.2,9A1.5,1.5,0,0,1,19.55,21.75H2.447"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <span>File Manager</span>
                  <span className="badge text-light rounded-pill ms-auto bg-success">
                    New
                  </span>
                </a>
              </li>
              <li className="nav-item px-2 py-1">
                <a
                  data-toggle="collapse"
                  href="#authenticationCollapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="authenticationCollapse"
                  className="nav-link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="nav-link-icon"
                    height={18}
                    width={18}
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M18.75 9.75H5.25C4.42157 9.75 3.75 10.4216 3.75 11.25V21.75C3.75 22.5784 4.42157 23.25 5.25 23.25H18.75C19.5784 23.25 20.25 22.5784 20.25 21.75V11.25C20.25 10.4216 19.5784 9.75 18.75 9.75Z"
                    />
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M6.75 9.75V6C6.75 4.60761 7.30312 3.27226 8.28769 2.28769C9.27226 1.30312 10.6076 0.75 12 0.75C13.3924 0.75 14.7277 1.30312 15.7123 2.28769C16.6969 3.27226 17.25 4.60761 17.25 6V9.75"
                    />
                    <path
                      stroke="currentColor"
                      strokeWidth="1.5"
                      d="M12 16.5C11.7929 16.5 11.625 16.3321 11.625 16.125C11.625 15.9179 11.7929 15.75 12 15.75"
                    />
                    <path
                      stroke="currentColor"
                      strokeWidth="1.5"
                      d="M12 16.5C12.2071 16.5 12.375 16.3321 12.375 16.125C12.375 15.9179 12.2071 15.75 12 15.75"
                    />
                  </svg>
                  <span className="ml-2">
                    <span className="mr-2">Authentication</span>{" "}
                    <i className="fa-sharp fa-solid fa-angle-down" />
                  </span>
                </a>
                <div className="collapse" id="authenticationCollapse">
                  <ul className="nav flex-column">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link "
                        href="#authenticationSignUpCollapse"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="authenticationSignUpCollapse"
                      >
                        Sign up
                      </a>
                      <div
                        className="collapse "
                        id="authenticationSignUpCollapse"
                      >
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <a
                              href="./sign-up-cover.html"
                              className="nav-link "
                            >
                              Cover
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="./sign-up-illustration.html"
                              className="nav-link "
                            >
                              Illustration
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="./sign-up-basic.html"
                              className="nav-link "
                            >
                              Basic
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link "
                        href="#authenticationSignInCollapse"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="authenticationSignInCollapse"
                      >
                        Sign In
                      </a>
                      <div
                        className="collapse "
                        id="authenticationSignInCollapse"
                      >
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <a
                              href="./sign-in-cover.html"
                              className="nav-link "
                            >
                              Cover
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="./sign-in-illustration.html"
                              className="nav-link "
                            >
                              Illustration
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="./sign-in-basic.html"
                              className="nav-link "
                            >
                              Basic
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link "
                        href="#authenticationResetPasswordCollapse"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="authenticationResetPasswordCollapse"
                      >
                        Reset Password
                      </a>
                      <div
                        className="collapse "
                        id="authenticationResetPasswordCollapse"
                      >
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <a
                              href="./reset-password-cover.html"
                              className="nav-link "
                            >
                              Cover
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="./reset-password-illustration.html"
                              className="nav-link "
                            >
                              Illustration
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="./reset-password-basic.html"
                              className="nav-link "
                            >
                              Basic
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link "
                        href="#authenticationEmailVerificationCollapse"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="authenticationEmailVerificationCollapse"
                      >
                        Email Verification
                      </a>
                      <div
                        className="collapse "
                        id="authenticationEmailVerificationCollapse"
                      >
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <a
                              href="./email-verification-cover.html"
                              className="nav-link "
                            >
                              Cover
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="./email-verification-illustration.html"
                              className="nav-link "
                            >
                              Illustration
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="./email-verification-basic.html"
                              className="nav-link "
                            >
                              Basic
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link "
                        href="#authentication2StepVerificationCollapse"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="authentication2StepVerificationCollapse"
                      >
                        2-step Verification
                      </a>
                      <div
                        className="collapse "
                        id="authentication2StepVerificationCollapse"
                      >
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <a
                              href="./2-step-verification-cover.html"
                              className="nav-link "
                            >
                              Cover
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="./2-step-verification-illustration.html"
                              className="nav-link "
                            >
                              Illustration
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="./2-step-verification-basic.html"
                              className="nav-link "
                            >
                              Basic
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link dropdown "
                        href="#authenticationErrorCollapse"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="authenticationErrorCollapse"
                      >
                        Error
                      </a>
                      <div
                        className="collapse "
                        id="authenticationErrorCollapse"
                      >
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <a href="./error-cover.html" className="nav-link ">
                              Cover
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="./error-illustration.html"
                              className="nav-link "
                            >
                              Illustration
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="./error-basic.html" className="nav-link ">
                              Basic
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item w-100">
                <hr className="bg-light" />
              </li>
              <li className="nav-item px-2 py-1">
                <a className="nav-link " href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="nav-link-icon"
                    height={18}
                    width={18}
                  >
                    a
                    <path
                      d="M22.627 14.87 15 22.5l-3.75.75.75-3.75 7.631-7.63a2.113 2.113 0 0 1 2.991 0l.009.008a2.116 2.116 0 0 1-.004 2.992zM8.246 20.25h-6a1.5 1.5 0 0 1-1.5-1.5V2.25a1.5 1.5 0 0 1 1.5-1.5h15a1.5 1.5 0 0 1 1.5 1.5V9m-10.5-3.75h6m-9 4.5h9m-9 4.5h7.5"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <span>Documentation</span>
                  <span className="badge text-light rounded-pill ms-auto bg-info">
                    v1.0
                  </span>
                </a>
              </li>
              <li className="nav-item px-2 py-1">
                <a className="nav-link " href="#">
                  <svg
                    viewBox="0 0 24 24"
                    className="nav-link-icon"
                    height={18}
                    width={18}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.91,6.953,12.7,1.672a1.543,1.543,0,0,0-1.416,0L1.076,6.953a.615.615,0,0,0,0,1.094l10.209,5.281a1.543,1.543,0,0,0,1.416,0L22.91,8.047a.616.616,0,0,0,0-1.094Z"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M.758,12.75l10.527,5.078a1.543,1.543,0,0,0,1.416,0L23.258,12.75"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M.758,17.25l10.527,5.078a1.543,1.543,0,0,0,1.416,0L23.258,17.25"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <span>Components</span>
                </a>
              </li>
            </ul>
            <div className="rounded-lg py-5 px-4 text-center mt-5 bg-turquoise bg-msu text-light">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/87584482299b2cc1ec6f1e31ccfb1d42669f7a7a/4abee/assets/images/illustrations/upgrade-illustration.svg"
                alt="..."
                className="img-fluid mb-4"
                width={160}
                height={160}
              />
              <h6>
                Upgrade to explore
                <br /> <span className="emphasize">premium</span> features
              </h6>
              {/* Button */}
              <a className="btn w-100 btn-sm bg-turquoise-surf rounded-pill mt-4 bg-green-robin text-light">
                Upgrade to Business
              </a>
            </div>
          </div>
        </div>
      </nav>
      <main className="container-fluid px-0 main-scroll h-screen">
        <header className="container-fluid d-flex px-30 bg-raisin justify-content-between">
          <form className="d-none d-md-inline-block me-auto ">
            <div className="input-group input-group-merge">
              {/* Input */}
              <input
                type="text"
                className="form-control bg-light-green border-light-green w-250"
                placeholder="Search..."
                aria-label="Search for any term"
              />
              {/* Button */}
              <span className="input-group-text bg-light-green border-light-green p-0">
                {/* Button */}
                <button
                  className="btn rounded-2 w-30px h-30px p-0 mx-1"
                  type="button"
                  aria-label="Search button"
                >
                  <svg
                    viewBox="0 0 24 24"
                    height={16}
                    width={16}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.750 9.812 A9.063 9.063 0 1 0 18.876 9.812 A9.063 9.063 0 1 0 0.750 9.812 Z"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      transform="translate(-3.056 4.62) rotate(-23.025)"
                    />
                    <path
                      d="M16.221 16.22L23.25 23.25"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                </button>
              </span>
            </div>
          </form>
          <div className="d-flex align-items-center">
            <div className="dropdown mr-4">
              <a
                href="#"
                className="dropdown-toggle text-light no-arrow"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  height={18}
                  width={18}
                >
                  <g>
                    <path
                      d="M12,4.64A7.36,7.36,0,1,0,19.36,12,7.37,7.37,0,0,0,12,4.64Zm0,12.72A5.36,5.36,0,1,1,17.36,12,5.37,5.37,0,0,1,12,17.36Z"
                      style={{ fill: "currentColor" }}
                    />
                    <path
                      d="M12,3.47a1,1,0,0,0,1-1V1a1,1,0,0,0-2,0V2.47A1,1,0,0,0,12,3.47Z"
                      style={{ fill: "currentColor" }}
                    />
                    <path
                      d="M4.55,6a1,1,0,0,0,.71.29A1,1,0,0,0,6,6,1,1,0,0,0,6,4.55l-1-1A1,1,0,0,0,3.51,4.93Z"
                      style={{ fill: "currentColor" }}
                    />
                    <path
                      d="M2.47,11H1a1,1,0,0,0,0,2H2.47a1,1,0,1,0,0-2Z"
                      style={{ fill: "currentColor" }}
                    />
                    <path
                      d="M4.55,18l-1,1a1,1,0,0,0,0,1.42,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l1-1A1,1,0,0,0,4.55,18Z"
                      style={{ fill: "currentColor" }}
                    />
                    <path
                      d="M12,20.53a1,1,0,0,0-1,1V23a1,1,0,0,0,2,0V21.53A1,1,0,0,0,12,20.53Z"
                      style={{ fill: "currentColor" }}
                    />
                    <path
                      d="M19.45,18A1,1,0,0,0,18,19.45l1,1a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42Z"
                      style={{ fill: "currentColor" }}
                    />
                    <path
                      d="M23,11H21.53a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z"
                      style={{ fill: "currentColor" }}
                    />
                    <path
                      d="M18.74,6.26A1,1,0,0,0,19.45,6l1-1a1,1,0,1,0-1.42-1.42l-1,1A1,1,0,0,0,18,6,1,1,0,0,0,18.74,6.26Z"
                      style={{ fill: "currentColor" }}
                    />
                  </g>
                </svg>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <button
                    type="button"
                    className="dropdown-item"
                    data-theme-value="light"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="me-2"
                      height={18}
                      width={18}
                    >
                      <g>
                        <path
                          d="M12,4.64A7.36,7.36,0,1,0,19.36,12,7.37,7.37,0,0,0,12,4.64Zm0,12.72A5.36,5.36,0,1,1,17.36,12,5.37,5.37,0,0,1,12,17.36Z"
                          style={{ fill: "currentColor" }}
                        />
                        <path
                          d="M12,3.47a1,1,0,0,0,1-1V1a1,1,0,0,0-2,0V2.47A1,1,0,0,0,12,3.47Z"
                          style={{ fill: "currentColor" }}
                        />
                        <path
                          d="M4.55,6a1,1,0,0,0,.71.29A1,1,0,0,0,6,6,1,1,0,0,0,6,4.55l-1-1A1,1,0,0,0,3.51,4.93Z"
                          style={{ fill: "currentColor" }}
                        />
                        <path
                          d="M2.47,11H1a1,1,0,0,0,0,2H2.47a1,1,0,1,0,0-2Z"
                          style={{ fill: "currentColor" }}
                        />
                        <path
                          d="M4.55,18l-1,1a1,1,0,0,0,0,1.42,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l1-1A1,1,0,0,0,4.55,18Z"
                          style={{ fill: "currentColor" }}
                        />
                        <path
                          d="M12,20.53a1,1,0,0,0-1,1V23a1,1,0,0,0,2,0V21.53A1,1,0,0,0,12,20.53Z"
                          style={{ fill: "currentColor" }}
                        />
                        <path
                          d="M19.45,18A1,1,0,0,0,18,19.45l1,1a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42Z"
                          style={{ fill: "currentColor" }}
                        />
                        <path
                          d="M23,11H21.53a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z"
                          style={{ fill: "currentColor" }}
                        />
                        <path
                          d="M18.74,6.26A1,1,0,0,0,19.45,6l1-1a1,1,0,1,0-1.42-1.42l-1,1A1,1,0,0,0,18,6,1,1,0,0,0,18.74,6.26Z"
                          style={{ fill: "currentColor" }}
                        />
                      </g>
                    </svg>
                    Light mode
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="dropdown-item active"
                    data-theme-value="dark"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="me-2"
                      height={18}
                      width={18}
                    >
                      <path
                        d="M19.57,23.34a1,1,0,0,0,0-1.9,9.94,9.94,0,0,1,0-18.88,1,1,0,0,0,.68-.94,1,1,0,0,0-.68-.95A11.58,11.58,0,0,0,8.88,2.18,12.33,12.33,0,0,0,3.75,12a12.31,12.31,0,0,0,5.11,9.79A11.49,11.49,0,0,0,15.61,24,12.55,12.55,0,0,0,19.57,23.34ZM10,20.17A10.29,10.29,0,0,1,5.75,12a10.32,10.32,0,0,1,4.3-8.19A9.34,9.34,0,0,1,15.59,2a.17.17,0,0,1,.17.13.18.18,0,0,1-.07.2,11.94,11.94,0,0,0-.18,19.21.25.25,0,0,1-.16.45A9.5,9.5,0,0,1,10,20.17Z"
                        style={{ fill: "currentColor" }}
                      />
                    </svg>
                    Dark mode
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="dropdown-item"
                    data-theme-value="auto"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="me-2"
                      height={18}
                      width={18}
                    >
                      <path
                        d="M24,12a1,1,0,0,0-1-1H19.09a.51.51,0,0,1-.49-.4,6.83,6.83,0,0,0-.94-2.28.5.5,0,0,1,.06-.63l2.77-2.76a1,1,0,1,0-1.42-1.42L16.31,6.28a.5.5,0,0,1-.63.06A6.83,6.83,0,0,0,13.4,5.4a.5.5,0,0,1-.4-.49V1a1,1,0,0,0-2,0V4.91a.51.51,0,0,1-.4.49,6.83,6.83,0,0,0-2.28.94.5.5,0,0,1-.63-.06L4.93,3.51A1,1,0,0,0,3.51,4.93L6.28,7.69a.5.5,0,0,1,.06.63A6.83,6.83,0,0,0,5.4,10.6a.5.5,0,0,1-.49.4H1a1,1,0,0,0,0,2H4.91a.51.51,0,0,1,.49.4,6.83,6.83,0,0,0,.94,2.28.5.5,0,0,1-.06.63L3.51,19.07a1,1,0,1,0,1.42,1.42l2.76-2.77a.5.5,0,0,1,.63-.06,6.83,6.83,0,0,0,2.28.94.5.5,0,0,1,.4.49V23a1,1,0,0,0,2,0V19.09a.51.51,0,0,1,.4-.49,6.83,6.83,0,0,0,2.28-.94.5.5,0,0,1,.63.06l2.76,2.77a1,1,0,1,0,1.42-1.42l-2.77-2.76a.5.5,0,0,1-.06-.63,6.83,6.83,0,0,0,.94-2.28.5.5,0,0,1,.49-.4H23A1,1,0,0,0,24,12Zm-8.74,2.5A5.76,5.76,0,0,1,9.5,8.74a5.66,5.66,0,0,1,.16-1.31A.49.49,0,0,1,10,7.07a5.36,5.36,0,0,1,1.8-.31,5.47,5.47,0,0,1,5.46,5.46,5.36,5.36,0,0,1-.31,1.8.49.49,0,0,1-.35.32A5.53,5.53,0,0,1,15.26,14.5Z"
                        style={{ fill: "currentColor" }}
                      />
                    </svg>
                    Auto
                  </button>
                </li>
              </ul>
            </div>
            <div className="dropdown">
              <a
                className="dropdown-toggle text-light no-arrow"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="avatar avatar-circle avatar-xxs">
                  <img
                    className="avatar-img"
                    src="https://d33wubrfki0l68.cloudfront.net/8ab0a140561aa1ea23abaa0101bd41b9b1d0cb12/e951b/assets/images/flags/1x1/us.svg"
                    alt="..."
                    width={18}
                    height={18}
                  />
                </span>
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <h6 className="dropdown-header text-uppercase">
                    Select language
                  </h6>
                </li>
                <li>
                  <a
                    href="javascript: void(0);"
                    className="dropdown-item active"
                  >
                    <span className="avatar avatar-circle avatar-xxs">
                      <img
                        className="avatar-img"
                        src="https://d33wubrfki0l68.cloudfront.net/8ab0a140561aa1ea23abaa0101bd41b9b1d0cb12/e951b/assets/images/flags/1x1/us.svg"
                        alt="..."
                        width={18}
                        height={18}
                      />
                    </span>
                    <span className="text-truncate ms-2">English (US)</span>
                  </a>
                </li>
                <li>
                  <a href="javascript: void(0);" className="dropdown-item">
                    <span className="avatar avatar-circle avatar-xxs">
                      <img
                        className="avatar-img"
                        src="https://d33wubrfki0l68.cloudfront.net/7ee571bc59a0a1ac377631263167fb273a12a7d4/f112e/assets/images/flags/1x1/gb.svg"
                        alt="..."
                        width={18}
                        height={18}
                      />
                    </span>
                    <span className="text-truncate ms-2">English (UK)</span>
                  </a>
                </li>
                <li>
                  <a href="javascript: void(0);" className="dropdown-item">
                    <span className="avatar avatar-circle avatar-xxs">
                      <img
                        className="avatar-img"
                        src="https://d33wubrfki0l68.cloudfront.net/719d768eaac30c30937cb72db78ce3391e33a5dc/05fb9/assets/images/flags/1x1/es.svg"
                        alt="..."
                        width={18}
                        height={18}
                      />
                    </span>
                    <span className="text-truncate ms-2">Español</span>
                  </a>
                </li>
                <li>
                  <a href="javascript: void(0);" className="dropdown-item">
                    <span className="avatar avatar-circle avatar-xxs">
                      <img
                        className="avatar-img"
                        src="https://d33wubrfki0l68.cloudfront.net/423c01c313d4dd7ca6acd49b868069981490a9b7/c7155/assets/images/flags/1x1/fr.svg"
                        alt="..."
                        width={18}
                        height={18}
                      />
                    </span>
                    <span className="text-truncate ms-2">Française</span>
                  </a>
                </li>
                <li>
                  <a href="javascript: void(0);" className="dropdown-item">
                    <span className="avatar avatar-circle avatar-xxs">
                      <img
                        className="avatar-img"
                        src="https://d33wubrfki0l68.cloudfront.net/ba8ec66c54af0ff852cdbee4794d3858176ac85e/419c1/assets/images/flags/1x1/de.svg"
                        alt="..."
                        width={18}
                        height={18}
                      />
                    </span>
                    <span className="text-truncate ms-2">Deutsch</span>
                  </a>
                </li>
                <li>
                  <a href="javascript: void(0);" className="dropdown-item">
                    <span className="avatar avatar-circle avatar-xxs">
                      <img
                        className="avatar-img"
                        src="https://d33wubrfki0l68.cloudfront.net/c82251ff8fa03cc4eaaa6f972e7a9eb6f3d9380c/f62a5/assets/images/flags/1x1/cn.svg"
                        alt="..."
                        width={18}
                        height={18}
                      />
                    </span>
                    <span className="text-truncate ms-2">中文 (繁體)</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="vr bg-gray-700 mx-2 mx-lg-3" />
            <a
              className="d-flex align-items-center justify-content-center text-light rounded-circle shadow-sm size-40 position-relative"
              data-bs-toggle="offcanvas"
              href="#offcanvasNotifications"
              role="button"
              aria-controls="offcanvasNotifications"
            >
              <svg
                viewBox="0 0 24 24"
                height={18}
                width={18}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10,21.75a2.087,2.087,0,0,0,4.005,0"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
                <path
                  d="M12 3L12 0.75"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
                <path
                  d="M12,3a7.5,7.5,0,0,1,7.5,7.5c0,7.046,1.5,8.25,1.5,8.25H3s1.5-1.916,1.5-8.25A7.5,7.5,0,0,1,12,3Z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
              <span
                className="position-absolute absolute-0 text-light bg-danger rounded-pill p-1 font-weight-bold"
                style={{ fontSize: 12 }}
              >
                20+
              </span>
            </a>
          </div>
        </header>
        <div className="container-fluid bg-raisin px-30">
          <h1 className="h2 text-light">Dashboard</h1>
          <div className="row">
            <div className="col-md-3">
              {/* Card */}
              <div className="card border-0">
                <div className="card-body bg-charleston">
                  <div className="row">
                    <div className="col d-flex justify-content-between">
                      <div>
                        {/* Title */}
                        <h5 className="d-flex align-items-center text-uppercase text-muted fw-semibold mb-2">
                          <span className="legend-circle-sm bg-success" />
                          Income
                        </h5>
                        {/* Subtitle */}
                        <h2 className="mb-0 text-white">$3,240</h2>
                        {/* Comment */}
                        <p className="fs-6 text-muted mb-0">
                          No additional income
                        </p>
                      </div>
                      <span className="text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          height={32}
                          width={32}
                        >
                          <defs>
                            <style
                              dangerouslySetInnerHTML={{
                                __html:
                                  ".a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;}",
                              }}
                            />
                          </defs>
                          <title>cash-briefcase</title>
                          <path
                            className="a"
                            d="M9.75,15.937c0,.932,1.007,1.688,2.25,1.688s2.25-.756,2.25-1.688S13.243,14.25,12,14.25s-2.25-.756-2.25-1.688,1.007-1.687,2.25-1.687,2.25.755,2.25,1.687"
                          />
                          <line
                            className="a"
                            x1={12}
                            y1="9.75"
                            x2={12}
                            y2="10.875"
                          />
                          <line
                            className="a"
                            x1={12}
                            y1="17.625"
                            x2={12}
                            y2="18.75"
                          />
                          <rect
                            className="a"
                            x="1.5"
                            y="6.75"
                            width={21}
                            height={15}
                            rx="1.5"
                            ry="1.5"
                          />
                          <path
                            className="a"
                            d="M15.342,3.275A1.5,1.5,0,0,0,13.919,2.25H10.081A1.5,1.5,0,0,0,8.658,3.275L7.5,6.75h9Z"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>{" "}
                  {/* / .row */}
                </div>
              </div>
            </div>
            <div className="col-md-3">
              {/* Card */}
              <div className="card border-0">
                <div className="card-body bg-charleston">
                  <div className="row">
                    <div className="col d-flex justify-content-between">
                      <div>
                        {/* Title */}
                        <h5 className="d-flex align-items-center text-uppercase text-muted fw-semibold mb-2">
                          <span className="legend-circle-sm bg-danger" />
                          Expense
                        </h5>
                        {/* Subtitle */}
                        <h2 className="mb-0 text-white">$1,500</h2>
                        {/* Comment */}
                        <p className="fs-6 text-muted mb-0 text-truncate">
                          + $6.50 bank charges fee
                        </p>
                      </div>
                      <span className="text-primary">
                        <svg
                          viewBox="0 0 24 24"
                          height={32}
                          width={32}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.75,14.25H16.717a1.342,1.342,0,0,0-.5,2.587l2.064.826a1.342,1.342,0,0,1-.5,2.587H15.75"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M17.25 14.25L17.25 13.5"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M17.25 21L17.25 20.25"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M11.250 17.250 A6.000 6.000 0 1 0 23.250 17.250 A6.000 6.000 0 1 0 11.250 17.250 Z"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M3.75 14.25L8.25 14.25"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M8.25 14.25L8.25 6.75"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M11.25 9.75L11.25 8.25"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M5.25 14.25L5.25 9.75"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M7.5,20.25H2.25a1.43,1.43,0,0,1-1.5-1.415V2.335A1.575,1.575,0,0,1,2.25.75H12.879a1.5,1.5,0,0,1,1.06.439l2.872,2.872a1.5,1.5,0,0,1,.439,1.06V7.5"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>{" "}
                  {/* / .row */}
                </div>
              </div>
            </div>
            <div className="col-md-3">
              {/* Card */}
              <div className="card border-0">
                <div className="card-body bg-charleston">
                  <div className="row">
                    <div className="col-6">
                      {/* Title */}
                      <h5 className="text-uppercase text-muted fw-semibold mb-2">
                        Total
                      </h5>
                      {/* Subtitle */}
                      <h2 className="mb-0 text-white">$74,925</h2>
                      {/* Comment */}
                      <p className="fs-6 text-muted mb-0 text-truncate">
                        {/* Badge */}
                        <span className="badge text-bg-success-soft fs-6 fw-bold mb-n1">
                          <svg
                            viewBox="0 0 24 24"
                            height={10}
                            width={10}
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M23.25 12.75L23.25 6 16.5 6"
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M23.25,6l-7.939,7.939a1.5,1.5,0,0,1-2.122,0l-3.128-3.128a1.5,1.5,0,0,0-2.122,0L.75,18"
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                          </svg>
                          12%
                        </span>
                        from $65,934
                      </p>
                    </div>
                    <div className="col-6">
                      {/* Chart */}
                      <div className="chart-container h-70px">
                        <canvas
                          id="incomeChart"
                          width={156}
                          height={87}
                          style={{
                            display: "block",
                            boxSizing: "border-box",
                            height: "69.6px",
                            width: "124.8px",
                          }}
                        />
                      </div>
                    </div>
                  </div>{" "}
                  {/* / .row */}
                </div>
              </div>
            </div>
            <div className="col-md-3">
              {/* Card */}
              <div className="card border-0">
                <div className="card-body bg-charleston">
                  <div className="row justify-content-between">
                    <div className="col">
                      {/* Title */}
                      <h5 className="text-uppercase text-muted fw-semibold mb-2 d-flex align-items-center text-white">
                        Pageviews
                        {/* Icon */}
                        <a
                          href="javascript: void(0);"
                          className="ms-2 text-secondary"
                          data-bs-toggle="tooltip"
                          aria-label="Pageviews is a metric defined as the total number of pages viewed."
                          data-bs-original-title="Pageviews is a metric defined as the total number of pages viewed."
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            height={14}
                            width={14}
                          >
                            <path
                              d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,0,1,0,2Z"
                              style={{ fill: "currentColor" }}
                            />
                          </svg>
                        </a>
                      </h5>
                      {/* Subtitle */}
                      <h2 className="mb-0 text-white">123,598</h2>
                      {/* Comment */}
                      <p className="fs-6 text-muted mb-0">
                        {/* Badge */}
                        <span className="badge text-bg-danger-soft fs-6 fw-bold mb-n1">
                          <svg
                            viewBox="0 0 24 24"
                            height={10}
                            width={10}
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M23.25 11.25L23.25 18 16.5 18"
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M23.25,18l-7.939-7.939a1.5,1.5,0,0,0-2.122,0l-3.128,3.128a1.5,1.5,0,0,1-2.122,0L.75,6"
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                          </svg>
                          9.2%
                        </span>
                        from 134,969
                      </p>
                    </div>
                    <div className="col-5">
                      {/* Chart */}
                      <div className="chart-container h-65px">
                        <canvas
                          id="pageViewsChart"
                          width={123}
                          height={81}
                          style={{
                            display: "block",
                            boxSizing: "border-box",
                            height: "64.8px",
                            width: "98.4px",
                          }}
                        />
                      </div>
                    </div>
                  </div>{" "}
                  {/* / .row */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col bg-raisin px-30">
          {/* Card */}
          <div
            className="card border-0 flex-fill w-100"
            data-list='{"valueNames": ["name", "email", "id", {"name": "date", "attr": "data-signed"}, "status"], "page": 8}'
            id="users"
          >
            <div className="card-header border-0 card-header-space-between bg-raisin text-light">
              {/* Title */}
              <h2 className="card-header-title h4 text-uppercase">Users</h2>
            </div>
            {/* Table */}
            <div className="table-responsive">
              <table className="table align-middle table-edge table-hover table-nowrap mb-0">
                <thead className="thead-light">
                  <tr>
                    <th>
                      <a className="text-muted list-sort" data-sort="name">
                        Full name
                      </a>
                    </th>
                    <th>
                      <a className="text-muted list-sort" data-sort="email">
                        Email
                      </a>
                    </th>
                    <th>
                      <a className="text-muted list-sort" data-sort="id">
                        User ID
                      </a>
                    </th>
                    <th>
                      <a className="text-muted list-sort" data-sort="date">
                        Signed up
                      </a>
                    </th>
                    <th className="w-150px min-w-150px">
                      <a className="text-muted list-sort" data-sort="status">
                        Status
                      </a>
                    </th>
                  </tr>
                </thead>
                <tbody className="list">
                  <tr>
                    <td>
                      <div className="avatar avatar-circle avatar-xs me-2">
                        <img
                          src="https://d33wubrfki0l68.cloudfront.net/9e7ac59225f733be5944b3e91271b33adb30cae7/56230/assets/images/profiles/profile-14.jpeg"
                          alt="..."
                          className="avatar-img"
                          width={30}
                          height={30}
                        />
                      </div>
                      <span className="name fw-bold">Hakeem Chan</span>
                    </td>
                    <td className="email">
                      lobortis.augue@natoquepenatibuset.ca
                    </td>
                    <td className="id">#9265</td>
                    <td className="date" data-signed={1648252800}>
                      03.26.2022
                    </td>
                    <td className="status">
                      <span className="legend-circle bg-success" />
                      Successful
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="avatar avatar-circle avatar-xs me-2">
                        <img
                          src="https://d33wubrfki0l68.cloudfront.net/44bfbd93721837b9534e9dc6fc058dbaef92d03a/f9236/assets/images/profiles/profile-23.jpeg"
                          alt="..."
                          className="avatar-img"
                          width={30}
                          height={30}
                        />
                      </div>
                      <span className="name fw-bold">Orli J. Goodman</span>
                    </td>
                    <td className="email">pede@at.com</td>
                    <td className="id">#8545</td>
                    <td className="date" data-signed={1627858800}>
                      08.02.2021
                    </td>
                    <td className="status">
                      <span className="legend-circle bg-success" />
                      Successful
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="avatar avatar-circle avatar-xs me-2">
                        <img
                          src="https://d33wubrfki0l68.cloudfront.net/236af360580cfc7622e3a7d309d709a5018937c5/e3ee4/assets/images/profiles/profile-16.jpeg"
                          alt="..."
                          className="avatar-img"
                          width={30}
                          height={30}
                        />
                      </div>
                      <span className="name fw-bold">Halee P. Lane</span>
                    </td>
                    <td className="email">diam@nislNullaeu.net</td>
                    <td className="id">#4445</td>
                    <td className="date" data-signed={1615680000}>
                      03.14.2021
                    </td>
                    <td className="status">
                      <span className="legend-circle bg-warning" />
                      Pending
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="avatar avatar-circle avatar-xs me-2">
                        <span className="avatar-title text-bg-primary-soft">
                          KS
                        </span>
                      </div>
                      <span className="name fw-bold">Kimberly Salinas</span>
                    </td>
                    <td className="email">
                      in.lobortis.tellus@faucibusorci.co.uk
                    </td>
                    <td className="id">#2391</td>
                    <td className="date" data-signed={1615939200}>
                      03.17.2021
                    </td>
                    <td className="status">
                      <span className="legend-circle bg-success" />
                      Successful
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="avatar avatar-circle avatar-xs me-2">
                        <img
                          src="https://d33wubrfki0l68.cloudfront.net/963edcf9fc0c25098f00370b3b3d021e2ddac277/e69d6/assets/images/profiles/profile-17.jpeg"
                          alt="..."
                          className="avatar-img"
                          width={30}
                          height={30}
                        />
                      </div>
                      <span className="name fw-bold">Galena Oliver</span>
                    </td>
                    <td className="email">
                      eleifend.nec@ligulaconsectetuerrhoncus.ca
                    </td>
                    <td className="id">#8987</td>
                    <td className="date" data-signed={1607990400}>
                      12.15.2021
                    </td>
                    <td className="status">
                      <span className="legend-circle bg-warning" />
                      Pending
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="avatar avatar-circle avatar-xs me-2">
                        <img
                          src="https://d33wubrfki0l68.cloudfront.net/768c1ecfdff6a59ab55d514b80bd59e8dfa28996/35a64/assets/images/profiles/profile-19.jpeg"
                          alt="..."
                          className="avatar-img"
                          width={30}
                          height={30}
                        />
                      </div>
                      <span className="name fw-bold">Kelly Doyle</span>
                    </td>
                    <td className="email">
                      urna.et@volutpatNulladignissim.org
                    </td>
                    <td className="id">#5898</td>
                    <td className="date" data-signed={1650495600}>
                      04.21.2022
                    </td>
                    <td className="status">
                      <span className="legend-circle bg-danger" />
                      Overdue
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="avatar avatar-circle avatar-xs me-2">
                        <img
                          src="https://d33wubrfki0l68.cloudfront.net/0b34af989cce5e54297f16547b3eff1ace44dad5/eb8ea/assets/images/profiles/profile-20.jpeg"
                          alt="..."
                          className="avatar-img"
                          width={30}
                          height={30}
                        />
                      </div>
                      <span className="name fw-bold">Keane Wyatt</span>
                    </td>
                    <td className="email">quam@Ut.org</td>
                    <td className="id">#3431</td>
                    <td className="date" data-signed={1655506800}>
                      06.18.2022
                    </td>
                    <td className="status">
                      <span className="legend-circle bg-success" />
                      Successful
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="avatar avatar-circle avatar-xs me-2">
                        <span className="avatar-title text-bg-success-soft">
                          NA
                        </span>
                      </div>
                      <span className="name fw-bold">Nasim Aguirre</span>
                    </td>
                    <td className="email">nisl@mollis.net</td>
                    <td className="id">#6701</td>
                    <td className="date" data-signed={1602975600}>
                      10.18.2021
                    </td>
                    <td className="status">
                      <span className="legend-circle bg-danger" />
                      Overdue
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>{" "}
            {/* / .table-responsive */}
            <div className="card-footer">
              <div className="d-flex justify-content-between align-items-center">
                <div className="me-5 text-secondary small">
                  Showing: <span className="list-pagination-page-first">1</span>{" "}
                  - <span className="list-pagination-page-last">8</span> of{" "}
                  <span className="list-pagination-pages">20</span>
                </div>
                {/* Pagination */}
                <ul
                  className="pagination list-pagination mb-0"
                  style={{ display: "flex" }}
                >
                  <li className="page-item active">
                    <a className="page page-link" data-i={1} data-page={8}>
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page page-link"
                      href="javascript: void(0);"
                      data-i={2}
                      data-page={8}
                    >
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page page-link"
                      href="javascript: void(0);"
                      data-i={3}
                      data-page={8}
                    >
                      3
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
