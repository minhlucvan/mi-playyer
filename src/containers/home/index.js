import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ReactMusicPlayer from '../../components/react-music-player';

let songs = [
  {
      url: 'http://tegos.kz/new/mp3_full/Redfoo_-_New_Thang.mp3',
      cover: 'http://www.nossoarmario.com/blog/wp-content/uploads/2015/01/redfoo.jpg',
      artist: {
          name: 'Redfoo',
          song: 'New Thang'
      }
  },
  {
      url: 'http://a.tumblr.com/tumblr_lpoc6cHNDP1r0jthjo1.mp3',
      cover: 'http://www.thailandballoonfestival.com/tibf2013/images/HugoSlider1.jpg',
      artist: {
          name: 'Hugo',
          song: '99 Problems'
      }
  },
  {
      url: 'http://claymore.france.free.fr/momo/summer love.mp3',
      cover: 'http://myuvn.com/wp-content/uploads/2015/07/justin-timberlake-pusher-love-girl.jpg',
      artist: {
          name: 'Justin Timberlake',
          song: 'Summer Love'
      }
  },
  {
      url: 'http://a.tumblr.com/tumblr_mlyactVSyX1qejx3lo1.mp3',
      cover: 'http://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2015/06/daft-punk.jpg',
      artist: {
          name: 'Daft Punk',
          song: 'Get Lucky'
      }
  },
  {
      url: 'http://a.tumblr.com/tumblr_lxe7hpIUPA1r3ne4ro1.mp3',
      artist: {
          name: 'Michael Buble',
          song: 'Feeling Good'
      }
  },
  {
      url: 'http://dl.tak3da.com/download/1394/03/The Weeknd - Can t Feel My Face [320].mp3',
      cover: 'http://www.clickgratis.com.br/fotos-imagens/the-weekend/aHR0cDovL3d3dy5iaWxsYm9hcmQuY29tL2ZpbGVzL3N0eWxlcy9wcm9tb182NTAvcHVibGljL21lZGlhL3RoZS13ZWVrZW5kLXRoZS1oaWxscy12aWRlby1iaWxsYm9hcmQtNjUwLmpwZw==.jpg',
      artist: {
          name: 'The Weekend',
          song: 'Can\'t Fell My Face'
      }
  },
  {
      url: 'http://midnightoilco.net/sitebuildercontent/sitebuilderfiles/metallicafuel.mp3',
      cover: 'http://imagens.ailhadometal.com/2015/03/Metallica3.png',
      artist: {
          name: 'Metallica',
          song: 'Fuel'
      }
  }
];

const Home = props => (
  <div>
    <ReactMusicPlayer songs={songs} autoplay />
  </div>
)

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect()(Home)
