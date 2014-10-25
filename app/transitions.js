export default function(){
  this.transition(
    this.fromRoute('tweets.index'),
    this.toRoute('tweets.tweet'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    // hasClass('is-replying-to') is true even during the first render, so
    // we also require fromNonEmptyModel to prevent an animation when
    // the page first loads.
    // this.fromNonEmptyModel(), nije true na pocetku pa nema potrebe za ovim
    this.hasClass('is-replying-to'),

    // this makes our rule apply when the liquid-if transitions to the
    // true state.
    this.toModel(true),
    this.use('toDown'),

    // which means we can also apply a reverse rule for transitions to
    // the false state.
    this.reverse('toUp')
  );
}
