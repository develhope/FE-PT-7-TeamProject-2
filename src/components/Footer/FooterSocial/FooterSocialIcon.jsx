function SocialIcon({ href, children }) {
  return (
    <div className="social-media-link-footer" id="hover-social-media">
      <a href={href} className="icon-wrapper" target="_blank" rel="noreferrer">
        {children}
      </a>
    </div>
  )
}

export default SocialIcon
