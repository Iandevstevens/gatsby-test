import { StaticImage } from "gatsby-plugin-image"
import React, { useEffect, useState } from "react"
import "../css/index.scss"
import LivePlayer from "react-h5-audio-player"

export type Audio = {
  src: string
  artWork: any
  artist: string
  artistID: string
  track: string
  album: string
  year: string
}
const API_BASE = process.env.NEXT_PUBLIC_API_BASE
const getRandom = (num: number) => Math.floor(Math.random() * num)

const AudioPlayerSlim = (props: any) => {
  const { artistID } = props

  const [playlist, setPlaylist] = useState<Audio[]>([])
  const [currentTrack, setSurrentTrack] = useState<number>(0)
  const [trackTicker, setTrackTicker] = useState<number>(0)

  const onClickNext = async () => {
    setSurrentTrack(prev => (prev === playlist.length - 1 ? 0 : prev + 1))
  }
  const onClickPrevious = async () => {
    setSurrentTrack(prev => (prev === 0 ? playlist.length - 1 : prev - 1))
  }

  const onPlaying = (A: any) => {
    setTrackTicker(0)
    let x: any = document.getElementById("umg-musicvideo")
    if (x) {
      x.pause()
    }
  }

  const onListen = (event: any) => {
    const milliSecs = Math.round(event.timeStamp)
    const tPlus: number = Number(`0.${milliSecs % 1000}`)
    setTrackTicker(t => t + 1 + tPlus)
  }
  useEffect(() => {
    setTrackTicker(0)
  }, [currentTrack])

  useEffect(() => {
    const songs: any = {
      100: [
        {
          src: "https://sebenza.s3.af-south-1.amazonaws.com/prod/brand_channel/UMG_brand_channel/Audio+Clips/De+Mthuda/De+Mthuda+Feat.+Kabza+De+Small%2C+Malumnator+_+Da+Muziqal+Chef+-+Khethile+Khethile-04.mp3",
          artWork: "/noprecache/audio/covers/em1.png",
          artist: "De Mthuda",
          artistID: "100",
          track: "Khetile Khetile",
          album: "The Landlord 2",
          year: "2021",
        },
        {
          src: "https://sebenza.s3.af-south-1.amazonaws.com/prod/brand_channel/UMG_brand_channel/Audio+Clips/De+Mthuda/2.+De+Mthuda+X+Sir+Trill+-+Khwela+Khwela-04.mp3",
          artWork: "/noprecache/audio/covers/em1.png",
          artist: "De Mthuda",
          artistID: "100",
          track: "Khwela Khwela",
          album: "The Landlord 2",
          year: "2021",
        },
        {
          src: "https://sebenza.s3.af-south-1.amazonaws.com/prod/brand_channel/UMG_brand_channel/Audio+Clips/De+Mthuda/3.+De+Mthuda+X+Sir+Trill+Feat.+Dali+-+Inganono-04.mp3",
          artWork: "/noprecache/audio/covers/em1.png",
          artist: "De Mthuda",
          artistID: "100",
          track: "Inganono",
          album: "The Landlord 2",
          year: "2021",
        },
        {
          src: "https://sebenza.s3.af-south-1.amazonaws.com/prod/brand_channel/UMG_brand_channel/Audio+Clips/De+Mthuda/05.+De+Mthuda+-+Mhlaba+Wonke(Feat.+Sino+Msolo+%26+Sipho+Magudulela)-04.mp3",
          artWork: "/noprecache/audio/covers/em1.png",
          artist: "De Mthuda",
          artistID: "100",
          track: "Mhlaba Wonke",
          album: "The Landlord 2",
          year: "2021",
        },
        {
          src: "https://sebenza.s3.af-south-1.amazonaws.com/prod/brand_channel/UMG_brand_channel/Audio+Clips/De+Mthuda/07.+De+Mthuda+-+Khanda+Liyazula(Feat.+Mthunzi+%26+Sino+Msolo)-04.mp3",
          artWork: "/noprecache/audio/covers/em1.png",
          artist: "De Mthuda",
          artistID: "100",
          track: "Khanda Lyiazula ",
          album: "The Landlord 2",
          year: "2021",
        },
      ],
      101: [
        {
          src: "https://sebenza.s3.af-south-1.amazonaws.com/prod/brand_channel/UMG_brand_channel/Audio+Clips/DJ+Stokie/01.+DJ+Stokie+_+Loxion+Deep+ft+SirTrill+_+Murumba+Pitch+-+Soke+S%E2%80%99bone-09.mp3",
          artWork: "/noprecache/audio/covers/em2.png",
          artist: "DJ Stokie",
          artistID: "101",
          track: "Stokoloko",
          album: "Soke S’bone",
          year: "2021",
        },
        {
          src: "https://sebenza.s3.af-south-1.amazonaws.com/prod/brand_channel/UMG_brand_channel/Audio+Clips/DJ+Stokie/02.+DJ+Stokie+_+Dlala+Regal+ft+Nokwazi+_+Bontle+-+Ukhalelani-05.mp3",
          artWork: "/noprecache/audio/covers/em2.png",
          artist: "DJ Stokie",
          artistID: "101",
          track: "Ukhalelani",
          album: "Soke S’bone",
          year: "2021",
        },
        {
          src: "https://sebenza.s3.af-south-1.amazonaws.com/prod/brand_channel/UMG_brand_channel/Audio+Clips/DJ+Stokie/03+-+Ipiano+e_soweto+ft+daliwonga+_-06.mp3",
          artWork: "/noprecache/audio/covers/em2.png",
          artist: "DJ Stokie",
          artistID: "101",
          track: "Ipiano e'Soweto",
          album: "Soke S’bone",
          year: "2021",
        },
        {
          src: "https://sebenza.s3.af-south-1.amazonaws.com/prod/brand_channel/UMG_brand_channel/Audio+Clips/DJ+Stokie/03.+Dj+Stokie+ft+Loxion+Deep+_+Murumba+Pitch+-+Stokoloko-05.mp3",
          artWork: "/noprecache/audio/covers/em2.png",
          artist: "DJ Stokie",
          artistID: "101",
          track: "Soke S'Bone",
          album: "Soke S’bone",
          year: "2021",
        },
        {
          src: "https://sebenza.s3.af-south-1.amazonaws.com/prod/brand_channel/UMG_brand_channel/Audio+Clips/DJ+Stokie/04.+DJ+Stokie+_+Ben+Da+Prince+ft+Murumba+Pitch+-+Feelings-05.mp3",
          artWork: "/noprecache/audio/covers/em2.png",
          artist: "DJ Stokie",
          artistID: "101",
          track: "Feelings",
          album: "Soke S’bone",
          year: "2021",
        },
      ],
      102: [
        {
          src: "https://sebenza.s3.af-south-1.amazonaws.com/prod/brand_channel/UMG_brand_channel/Audio+Clips/Nomfundo/Nomfundo_Moh_-_Amagama.wav",
          artWork:
            "https://sebenza.s3.af-south-1.amazonaws.com/dev/umg/artists/Nomfundo/Nomfundo_Moh_Amagama.png",
          artist: "Nomfundo Moh",
          artistID: "102",
          track: "Amagama",
          album: "Amagama",
          year: "2022",
        },
        {
          src: "https://sebenza.s3.af-south-1.amazonaws.com/prod/brand_channel/UMG_brand_channel/Audio+Clips/Nomfundo/Nomfundo_Moh_-_Ngamkhetha.wav",
          artWork:
            "https://sebenza.s3.af-south-1.amazonaws.com/dev/umg/artists/Nomfundo/Nomfundo_Moh_Amagama.png",
          artist: "Nomfundo Moh",
          artistID: "102",
          track: "Ngamkhetha",
          album: "Amagama",
          year: "2022",
        },
        {
          src: "https://sebenza.s3.af-south-1.amazonaws.com/prod/brand_channel/UMG_brand_channel/Audio+Clips/Nomfundo/Nomfundo_Moh_-_Soft_Life.wav",
          artWork:
            "https://sebenza.s3.af-south-1.amazonaws.com/dev/umg/artists/Nomfundo/Nomfundo_Moh_Amagama.png",
          artist: "Nomfundo Moh",
          artistID: "102",
          track: "Soft Life",
          album: "Amagama",
          year: "2022",
        },
        {
          src: "https://sebenza.s3.af-south-1.amazonaws.com/prod/brand_channel/UMG_brand_channel/Audio+Clips/Nomfundo/Nomfundo_Moh_ft_Shasha___Ami_faku_-_Phakade.wav",
          artWork:
            "https://sebenza.s3.af-south-1.amazonaws.com/dev/umg/artists/Nomfundo/Nomfundo_Moh_Amagama.png",
          artist: "Nomfundo Moh",
          artistID: "102",
          track: "Phakade Lami",
          album: "Amagama",
          year: "2022",
        },
        {
          src: "https://sebenza.s3.af-south-1.amazonaws.com/prod/brand_channel/UMG_brand_channel/Audio+Clips/Nomfundo/Nomfundo_Moh_ft_Demthuda___Da_Muziqal_Chief_-_Kuhle.wav",
          artWork:
            "https://sebenza.s3.af-south-1.amazonaws.com/dev/umg/artists/Nomfundo/Nomfundo_Moh_Amagama.png",
          artist: "Nomfundo Moh",
          artistID: "102",
          track: "Kuhle",
          album: "Amagama",
          year: "2022",
        },
      ],
      103: [
        {
          src: "https://sebenza.s3.af-south-1.amazonaws.com/prod/brand_channel/UMG_brand_channel/Audio+Clips/SKHANDAWORLD/01+-+SKHANDAWORLD+-+Homeground-05.mp3",
          artWork:
            "https://sebenza.s3.af-south-1.amazonaws.com/prod/brand_channel/UMG_brand_channel/Artists/Shkanda+World/Album+Artwork/Skhandaworld%2C+Welcome+To+The+Planet.png",
          artist: "Skhanda World",
          artistID: "103",
          track: "Homeground",
          album: "Welcome to the planet",
          year: "2021",
        },
        {
          src: "https://sebenza.s3.af-south-1.amazonaws.com/prod/brand_channel/UMG_brand_channel/Audio+Clips/SKHANDAWORLD/05+-+DJ+Mr+X+ft.+Tshego%2C+Roiii%2C+K.O%2C+AKA+-+All+I+Want-05.mp3",
          artWork:
            "https://sebenza.s3.af-south-1.amazonaws.com/prod/brand_channel/UMG_brand_channel/Artists/Shkanda+World/Album+Artwork/Skhandaworld%2C+Welcome+To+The+Planet.png",
          artist: "Skhanda World",
          artistID: "103",
          track: "All I Want",
          album: "Welcome to the planet",
          year: "2021",
        },
        {
          src: "https://sebenza.s3.af-south-1.amazonaws.com/prod/brand_channel/UMG_brand_channel/Audio+Clips/SKHANDAWORLD/06+-+Just+Bheki+-+Mzala-05.mp3",
          artWork:
            "https://sebenza.s3.af-south-1.amazonaws.com/prod/brand_channel/UMG_brand_channel/Artists/Shkanda+World/Album+Artwork/Skhandaworld%2C+Welcome+To+The+Planet.png",
          artist: "Skhanda World",
          artistID: "103",
          track: "Mzala",
          album: "Welcome to the planet",
          year: "2021",
        },
        {
          src: "https://sebenza.s3.af-south-1.amazonaws.com/prod/brand_channel/UMG_brand_channel/Audio+Clips/SKHANDAWORLD/07+-+Loki+ft.+Blxckie+-+Shoda+Ngami+-05.mp3",
          artWork:
            "https://sebenza.s3.af-south-1.amazonaws.com/prod/brand_channel/UMG_brand_channel/Artists/Shkanda+World/Album+Artwork/Skhandaworld%2C+Welcome+To+The+Planet.png",
          artist: "Skhanda World",
          artistID: "103",
          track: "Shoda Ngami",
          album: "Welcome to the planet",
          year: "2021",
        },
        {
          src: "https://sebenza.s3.af-south-1.amazonaws.com/prod/brand_channel/UMG_brand_channel/Audio+Clips/SKHANDAWORLD/Ma-E+ft.+Khuli+Chana+_+Just+Bheki+-+Ain%E2%80%99t+No+Tomorrow+(Clean+Master)-05.mp3",
          artWork:
            "https://sebenza.s3.af-south-1.amazonaws.com/prod/brand_channel/UMG_brand_channel/Artists/Shkanda+World/Album+Artwork/Skhandaworld%2C+Welcome+To+The+Planet.png",
          artist: "Skhanda World",
          artistID: "103",
          track: "Ain’t No Tomorrow",
          album: "Welcome to the planet",
          year: "2021",
        },
        {
          src: "https://sebenza.s3.af-south-1.amazonaws.com/prod/brand_channel/UMG_brand_channel/Audio+Clips/SKHANDAWORLD/Roiii+-+La+Vida+Loca+(Clean+Master)-05.mp3",
          artWork:
            "https://sebenza.s3.af-south-1.amazonaws.com/prod/brand_channel/UMG_brand_channel/Artists/Shkanda+World/Album+Artwork/Skhandaworld%2C+Welcome+To+The+Planet.png",
          artist: "Skhanda World",
          artistID: "103",
          track: "La Vida Loca",
          album: "Welcome to the planet",
          year: "2021",
        },
      ],
      104: [
        {
          src: "https://sebenza.s3.af-south-1.amazonaws.com/prod/brand_channel/UMG_brand_channel/Audio+Clips/Zakes+Bantwini/01.+Zakes+Bantwini+_+Karyendasoul+ft+Nanna+Atta+-+Abantu-03.mp3",
          artWork:
            "https://sebenza.s3.af-south-1.amazonaws.com/prod/brand_channel/UMG_brand_channel/Artists/Zakes+Bantwini/Album+Artwork/Zakes_Bantwini_Ghetto_King.png",
          artist: "Zakes Bantwini",
          artistID: "104",
          track: "Abantu",
          album: "Ghetto King",
          year: "2021",
        },
        {
          src: "https://sebenza.s3.af-south-1.amazonaws.com/prod/brand_channel/UMG_brand_channel/Audio+Clips/Zakes+Bantwini/02.+Zakes+Bantwini+Feat.+Skye+Wanda+-+Girl+in+the+Mirror-03.mp3",
          artWork:
            "https://sebenza.s3.af-south-1.amazonaws.com/prod/brand_channel/UMG_brand_channel/Artists/Zakes+Bantwini/Album+Artwork/Zakes_Bantwini_Ghetto_King.png",
          artist: "Zakes Bantwini",
          artistID: "104",
          track: "Girl in the Mirror",
          album: "Ghetto King",
          year: "2021",
        },
        {
          src: "https://sebenza.s3.af-south-1.amazonaws.com/prod/brand_channel/UMG_brand_channel/Audio+Clips/Zakes+Bantwini/03.+Zakes+Bantwini+Feat.+Amanda+Black+-+Bawo-03.mp3",
          artWork:
            "https://sebenza.s3.af-south-1.amazonaws.com/prod/brand_channel/UMG_brand_channel/Artists/Zakes+Bantwini/Album+Artwork/Zakes_Bantwini_Ghetto_King.png",
          artist: "Zakes Bantwini",
          artistID: "104",
          track: "Bawo",
          album: "Ghetto King",
          year: "2021",
        },
        {
          src: "https://sebenza.s3.af-south-1.amazonaws.com/prod/brand_channel/UMG_brand_channel/Audio+Clips/Zakes+Bantwini/04.+Zakes+Bantwini+Feat.+Nomkhosi+_+Khetha+-+Uzalo-03.mp3",
          artWork:
            "https://sebenza.s3.af-south-1.amazonaws.com/prod/brand_channel/UMG_brand_channel/Artists/Zakes+Bantwini/Album+Artwork/Zakes_Bantwini_Ghetto_King.png",
          artist: "Zakes Bantwini",
          artistID: "104",
          track: "Uzalo",
          album: "Ghetto King",
          year: "2021",
        },
        {
          src: "https://sebenza.s3.af-south-1.amazonaws.com/prod/brand_channel/UMG_brand_channel/Audio+Clips/Zakes+Bantwini/07.+Zakes+Bantwini+_+Kasango+-+Osama-04.mp3",
          artWork:
            "https://sebenza.s3.af-south-1.amazonaws.com/prod/brand_channel/UMG_brand_channel/Artists/Zakes+Bantwini/Album+Artwork/Zakes_Bantwini_Ghetto_King.png",
          artist: "Zakes Bantwini",
          artistID: "104",
          track: "Osama",
          album: "Ghetto King",
          year: "2021",
        },
      ],
    }
    const defaultSongs = [
      songs[100][getRandom(5)],
      songs[101][getRandom(5)],
      songs[102][getRandom(5)],
      songs[103][getRandom(6)],
      songs[104][getRandom(5)],
    ]
    shuffleArray(songs[artistID] || defaultSongs)
    setPlaylist(songs[artistID] || defaultSongs)
    return () => {}
  }, [])
  const onPlayError = () => {
    console.error(
      "failed to load track, list is,playlist , track number, currentTrack"
    )
  }

  function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
  }
  const Header = () => {
    return (
      <div className="text-center text-white">
        <p className="font-semibold text-sm py-0.5">
          {playlist[currentTrack].artist}
        </p>
        <p className="text-xs">{playlist[currentTrack].track}</p>
      </div>
    )
  }
  const goTo = (id: string) => {
    // router.push(`/channel/umg/artist/${id}`)
  }
  return (
    <>
      {playlist.length > 0 && (
        <div className="flex flex-row items-center justify-center mb-1 text-black rounded-lg bg-black">
          <div
            className="h-28 w-28 pl-2 pt-1"
            onClick={() => goTo(playlist[currentTrack].artistID)}
          >
            <StaticImage
              alt="music"
              src={
                "https://sebenza.s3.af-south-1.amazonaws.com/dev/images/ads/medium/Khwela_Medium_Banner_v1.png"
              }
              width={320}
              height={320}
              className="rounded"
            />
          </div>
          <div className="w-64">
            <LivePlayer
              loop
              showSkipControls
              autoPlayAfterSrcChange
              listenInterval={1500}
              src={playlist[currentTrack].src}
              onListen={onListen}
              onPlaying={onPlaying}
              showJumpControls={false}
              className="rounded-r-lg umg-music"
              onPlayError={onPlayError}
              onClickNext={onClickNext}
              onClickPrevious={onClickPrevious}
              customAdditionalControls={[]}
              customVolumeControls={[]}
              customProgressBarSection={[]}
              header={<Header />}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default AudioPlayerSlim
