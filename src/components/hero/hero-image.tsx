export function HeroImage() {
  return (
    <div
      className="-mx-4 h-[448px] px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
      <div className="relative aspect-[366/729] mx-auto max-w-[366px]">
        <div
          className="absolute inset-y-[calc(1/729*100%)] left-[calc(7/729*100%)] right-[calc(5/729*100%)] rounded-[calc(58/366*100%)/calc(58/729*100%)] shadow-2xl"></div>
        <img src={'/main.svg'} alt={'img'} className={'absolute inset-0 w-full h-full object-cover'} />
      </div>
    </div>)
}