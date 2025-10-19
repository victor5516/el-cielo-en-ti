const TestimonialCard = ({ text, author, tag }) => {
  return (
    <div className="rounded-2xl border border-third/30 bg-white/40 p-6">
      <div className="mb-3 text-third">★★★★★</div>
      <p className="text-sm italic text-primary/80">"{text}"</p>
      <div className="mt-4">
        <strong className="block text-primary">{author}</strong>
        <span className="text-xs text-primary/70">{tag}</span>
      </div>
    </div>
  )
}

export default TestimonialCard
