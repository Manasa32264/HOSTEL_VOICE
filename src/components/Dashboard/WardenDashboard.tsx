import React, { useState, useEffect } from 'react';
import { Users, MessageSquare, Calendar, FileText, Plus, Edit2, Eye, Check, X, Clock, AlertCircle, DollarSign, TrendingUp, Home, Phone, Mail, User, Settings, Bell, Search, Filter, Download } from 'lucide-react';

const WardenDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Warden Information
  const wardenInfo = {
    name: 'Dr. Manny',
    title: 'Chief Warden',
    photo: 'data:image/jpeg;base64,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',
    experience: '15 Years',
    email: 'manny@gmail.com',
    phone: '+91 98765 43210',
    department: 'Student Affairs'
  };

  // State for students
  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'Arohi',
      email: 'arohi@gmail.com',
      phone: '+91 98765 43211',
      room: 'G-8',
      department: 'CSE',
      year: '2',
      parentName: 'Basvannappa',
      parentPhone: '+91 98765 43212',
      guardianName: '',
      guardianPhone: '',
      photo: 'https://i.pinimg.com/originals/87/66/e5/8766e5f221fa30acb078d6d2d6b7af81.jpg',
      joinDate: '2024-01-15',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Athulya',
      email: 'athulya@gmail.com',
      phone: '+91 98765 43213',
      room: 'C-5',
      department: 'ECE',
      year: '3',
      parentName: 'Krishna',
      parentPhone: '+91 98765 43214',
      guardianName: '',
      guardianPhone: '',
      photo: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUWFRUXFRcXFRUXFhUXFRcXFhUXFRgYHSggGBolHRcVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lHyYtLystLS0tLS0uLS0tLS0tLS0tLS0tLS0tLS0uLS0tLS0tLS0tLS0tLS0tLS0tLS0rLf/AABEIASwAqAMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABAEAABAwEFBQQHBgUEAwEAAAABAAIRAwQSITFBBQZRYXEigZGxEzJCUqHB0QcjYnLh8BSCkrLxM0NzwlNjohX/xAAaAQABBQEAAAAAAAAAAAAAAAAEAAECAwUG/8QALxEAAgIBAwIEBAYDAQAAAAAAAAECEQMEEiExQQUiUWETM6HwMnGBkeHxQrHRFP/aAAwDAQACEQMRAD8A1jziepRI35nqUla6MoNEgiKQwaSUaIpCCSSjSSkKwFJRokhgiiQKJOMEURKU/wA0lIQSJGiSGClFKNEnEBBBBOIEoIkEhFm84nqUko3nE9SiUETDRSilEkIMokEklIQERQJSSkMBSbPYXvxA8TH6qC7alCmbriC7WTgBxjh8SjfvG0+pMcTh4BYur8UlB7ccf1Zr6Xw3ermzS2Dd2fXcBwu4+N5vzUg7rtkdoRrmD++9Zqwb0kEArb7M2g2q3mhsPispvbLhl2fw1Y1dcFS7dzGBdjmXAj44px261O767p0OBA7oxVjtYua2+0wBmDMeIyQsFrDxnjqpz8RyKexuilaSG3dRjbfs2pSPaaCNHA4Hpz5KA8ciF0utZmvaWuEgrJbS3dq05NPtNxMDhzbx6T3ZLU02r3qp9QHNp9ruPQz6Cde0a+I+Y07kh7COmh0R1grQlBBBIYJBBGnoRYPzPUpMoVMz1KTKgiYpFKKURKQwZKJEgUhAWU3p3k9GTRpGX+0R7PIc/JTN7dufw9O6w/evBu/gGReflz6LmhceJxzOp6oPVZq8iDdLhvzy/QsRb4JLiXOJnPXmU/ZtovcZJw0AyVJyUqnUu4DP95rLnBUa+PI0zTWe0Lbbobx3HBjgMYAK5fZrVjGfEq3oW0NcMTPLMIHJhafHUPWSM4NSPQgLXtxggjHmCsTs+1eitD2GWw4gZjCcJCvd0totrUWkNugCACZJjUmFA36uU/RV4xvhjuYIMd4hLPBzgpd0B6dqM3jfRmqoOkAynSJCqtg1g5gumRGHEclahG6ae6CYHkjtk0Ue1NlMecQA85PyD/wvHHmsja7O6k4tIw1B5aHmOPMHIro9ekHCCqLbFj9I0gjths/mDZkfmGJH5iFp4c1cPoA5sN8oxj2x0OSSnHt9nvHOYy+CbWggFgQQRpWMS6mZ6lJR1Mz1KTKiSDlEilCU4wcqPbrW2lTdUeYDQSfonpWE+0HakltnacPWf/1Hz7gq8s9kWy3Dj3yozW0re+vUdVecXHAcAMgOQUUlGEkrHbt2zX6BtMY6lE0pKcaEmSQ+ypdGGakWV+MuOAzKhAISXENaCZIAAzJOHioNIstnT/s7226paGtLoY0EBgOGREnitjvDTbaw269waHG7HqktwvR1PeuabKshpVqVjon7y6X2moPZkRE8mkgDi4cV0imQA0AQGiAOAGSBytLoERjyn3ImzLe+yOb6QfdnBzmyWg6EjQH4c5w6BRqBwDgZBEg8QViqgBEESOByVlupbro/hnGYn0ZPuySG9w/tTabIoy2janG5R3o06gbVbF2oPYMnoc5Uy9ihXp3mlvEELUhPkzZLgwG3bH6N5gdm8bp0uu7TR8SO5Vuf771fbxsLRTzDrt04+5Iz71Sh5gkk8B1/x5hauCbljTM3LGpNDSCNGrSkeqHE9SkyhUOJ6lJlIcJ4OY8DkUQqH3T8D80qUSQ43UqOjBsdSMzgMBK5fvLTi11cZxbj/KF0XbNrFNkzxPcASSuV17Qaj3Pdm4yfogtZJUkHaOL5YglIAlKISS7RAB1C2hLATbHJ9jC4YEBsgF7iGsBOl4654DHBRbLIoZqu0Vnsu0im8OpMLntENvZXyIL3dJwHIKfsiwWZrS91dt4m6yKgvDjUcGns4TDTylbjYdrs0BlENhogZOgc8TE/FD5MldgiGO+4nc6xUqTCb9+s/tVXEdonhjpitIAm6VBg7TWgHkIToQE5W7L0kugZUajWuVmv90T/APUeRUW1MrFxLKsDQRgqPaO0LTTvempywscL7BJB0OH0Cqp7rQRCG5UdldiJHcio1JCg7AtfpbNSqe8xp8QFKoYFwWpv80ZLuYjjVp9il3qoXrvQme/H5LIOPwW128+Wke4Qe54I/uaFkbXTgzxW3o5eRGZqV5rI4CCNBFggqpmepSZQqHE9T5pMpIdhonOQlIqOjuxSEjI772u7TuavIBPJuJ+OCxbWxHMSrvfCrerNbwbP9R+gCqKh7YHBoHg0T81k55XJmvgjtiht5TQCdrM1T1nsl9wa3GdeAGZVFpIIq2M0KBe5rACbzgIESZ0Ercbx7s1XWN9R5DDRYajKTQHMa2m03g4kdpxE4jI8VT7EsYZtChTzaajYPHXzC69tCwipSfTOT2OYejwWnzQ2bI4yi0EY4XFpnGLXug+lTb2XF103hENvezDsR48NJlSd2N1a1W881fROaCQC/s3pF1pMwdZ5LqGya/paQL2gVG9iq33KjcHjpOIOoIOqmss7ZyCr/wDVJJprkn8CDproY7aVW1WWyfxVKp6jQalGr22GTdNxxJcIOMSZGUKtsf2gV6z2UG2T7x/4i0ZTIDh6usz4ra7Us4tDm2eJY1zKlfhDDep0+rnBpI91pnMTG3nltax1MLoqua4nT0lNzW483QO8KClFrzRt8/fuPtd+V0jI7X37dZnGm5tJ72+sGekIaeDi67j3Jkb6PrsdFNgIbJbL2ug4AiWlpzGqm7X3GDjepGe0XhrpiTxIOPgVW7W2WQ+yh1FrfRlrS4HF5zygYSCU7enceKsnjWbf7G13d+0izWNtOyWylaLO5lNoJdTvtcCOy5voySWmDiAQumNd2ieS5latgULbtBrqwLqdls9FjmhxaH1ajnVGtcW4w1mJH42rprs8NRPy+ibfFwjt69a/MCmnudlft+h91UqDO4Gn+tpB7u14rLVsWz3rckAi67JwI+qxtegWXmHQkeBP0WzoM26O19TN1UKdlWAglBBagAN1D2j1PmkyhWzPU+aSCnEKlR7S7snnHmnHu0H+P1Tdob2DHVM+g6OebVbeq2hx9inTHeSwH5qkb6y021Ghr7YD7VOk4dbzR5rMQsjMqf36mxh5X36C3nsdDC1H2evYarmOi+5sNnUYYDmswBPfh36JlrSHcwe8RqEPKO5NBCe1pnSLZscUrR6do/0a1lfA9xzy2rHS+0rpYgiQuJ7lbQL7aKdd7nttFN9Bxc4kw4dnE6yIHVdosbjdbe9cdmpwvDAnvMEciEFmi1SZfCVtsrbZspjnX+0x8AX2OLHECYDoweBJgOBAlRxsp5kOtdoc06TRZh+enSa8dQ4FXlRiZuqjcy6kxmhSawXWiAP2TxJ5nNQts0mVm+jcDBw4HiCCMQQQCDoQpluo03tLakFpwgmAeXNQywX5GTQABJgfU5YqLZYkQDXr0oa+k6qMvSUyySOL2OIIP5b3dkKDbVsL7RQu0nEtc5wbUHowSBDZJ0k4wD3rbOGCwG91rAtTADi1snlJUY1J9CcL6WbvYNAUqTe3fqVKtSpWfEB9SQwwNGgC6BwaFsqLsGHqPFcu3M2leoNBMuBf8XF3zXSqFT7tvM+QlVQnJZZX90D6jEoxVDm1iWsDxmxwPdkR8VUbeaDdqDJzfl9IV7amX6bm8WmOsSFnNpOiztBzDi34Y/Bb+lfmi161+5jZ+j/IoYQRwgt0zBmv6zvzHzTL/jon7UIe8cHuHgSmBn4p10E+oV0gcUqCUKjoBJ0ErIbw7RcSaV52HrXXFrQfcEeseJMjgBpXlyxxxtlmLFLK6RV75wKwDT7MHmAZErPQpVossYhRnBY08m9tmzDG4KmKDlIAB7SiAp+zYAqBNDDaxZUD2mHNcHNPAh0hegd2trMtdBtZmBIAe33XjP8AzqIXndxxJXaNxNnGhSBBILoceGQER3T3qnUJbUTxN7jZuaq3atOsW/cuDXTjLb0jliIKsqdQHkeH0QexAsKjLa7Oe2ptYE+ldePGPk7LxUndl7i9zbsCJnCOGU4Faq12Rjz2qbXdRj4qNU9DZqbnm7TY3Fx0/U8lGg2eqjKG2hjbFuZZ6Lqrzg0eJ0A5krjjLc6tWfUdm4knlwCm747zutlSGy2i0m43U/jdzPDQd6qNnet3FFQw7ItvqBLJckkX2w7W5j6Yb7TgPEhd3s7uxTHCD3Hs/NcG3apX69HgMT8I+JC7vZW9po/CB8UDmaWZL2Lc/ME2WtB+HRU+2aN8FrRiHnA4F2GbeeIViHw49VXbwtJu3MSJJAxOgBjuR2ik5zjGLpox9Qqi2zNVKcHXyI5EaFEpTba53ZcGu0F6SQdMZlBdGsmRfij+z/oynCL6Mg7SH31Uf+yp/cVFOcqVtT/Xq/8ALU/uKTYbI6q8MbmczoBqTyV9pRt+hW03KkObM2a60OujBsdp0SAD5nktFYd0LDSbH8OyodXVQKjnHUku+StLDZG0WBjMhmdSdSUK9pAyxWJqtR8WXsjW02F44+7IlTd+xkQbJZ4/4af0Wd2z9mtgrAljTQdxpns97HSI6Qryvbjx+iiPtLjqUJvC9rOVbwfZta7MC5gFdg1pg3h+amcfC8sSX3QRrkeUZr0FXrugw4z1WI3g2HTq1W2q4CWn75oAAqNx7ZGV5uZ4gcgpxy+onExew9kisWsHae5wvRiKbAcccrx4c8V2qw0LjWjgAPAKn2BZ2tOAAwwgAYcv3qtE0IfLNyZdCG0Kq7BUu1N86dk/1ml4/DF7wMA+IVhbqt1pK4lvTtQ167iD2WkhvPiUsWPe+RsktqOov+0fZxbIdVn3fROnpOXxXN96d56ttfLuzTaexTBwHN3vO56aLPhGio4YxdoqeRtUKClWdwa6TgIUQFSXNkJ5IlB9zU7oCHg/jpt8TPyXcaQxaenwXCt2K47GOIrUpHiJ+K7nQdgFiajjMG5neONe4/VPaKpN4CbwIOIAPTEq0tFW6CfAcScAPGFSbVqTPINbPGIk+MrT8Ig3mc+xj62SUNpBfXc71iCeJAJ7zEoJsILqKRj2xNtaX16gaJLqr4A1JcclsNj7NFBkZuOLz8hyCi7C2bcLqz/WcXXfwtJOPU+XVTLTaNAsjWaq/Iui+ppaTT/5vqHabToFV16ugS69SMP30UVxWW3ZpJUJc5IJQcUglSSGY3V4qutDbrpGR/cKxedFEeJBac9PkU9DJkCjTNDtMJ9FN4t1pe86n+EZlnCSMRB07XGMY6g4FZ+k4Ysd06dE7YdoFgFKrAc0AB3svAEBw4dNOearmu5bFlV9oO1fRUC0HtO7I75+QPguQrWfaHb/AElZrZwDb3e76AAeKyaLwxqJRldyDRpKUrSsMNUuzGR0UVikUDBnTI/VQn0LsfUn7MqmlVa+JAcJB9oZx1Xf9jWptakypTMtcJHEHVp5rgZp6hdf+zPGlep4teJeycG1Gm64t4T9EBmxLLT7hGTyIvNoVLro9oYtbmZPtu4AacSqa0nJozV9btl1TAY4BobEYNdInUDKIHcqqvs70YmrUaJ9lhvOd4+ZlbmjjjxQSRg6hzlJtkFlGQSTAGf06oJVWregAXWjIDHvPEnijWgr7gvC6Gptdo9kf4UKpUj5fVLquJmBPko1WjObgO/FctJts6KKSQ09yZcUK4jJ17uj5qMbRxSSHYQri9dOeiclVdtPbkcipdltF4Y5jP6qxEGO1FEtWh1Up2SjWgdnoUmMhq10LwvNzGfMfVQLQRUYWuwOh1E4K4oZKPbLCHSRrmOP6qJJHJd6rO9lch+uR0IBOIVOtTv3V7bKZ9ZsuP8ANAHTI4dFlUXD8KKZ9RQSgETAny1SbEkIYFJYIgjvSaVKcs1JoiBy+Sqmy/HEm2IjAaHLlyK6f9kdQNdWpE6BzRyMB0dIb4rlzaZZiMWla/dO1llanUYcQfHi09cu9BTntkn2D5YviY3F9Vyjqe8dic6HsjAGZaD3gxIWWrTMumdZz5H98Ft9n2xtVvKSPAqg2xZQHOaeyRi0wbpGc4ZdPJbeh1KlHaczqsNOylvaSgjc2NQeiC0wIvK1QknFMEpT3YmDOKacVyiOlEuKjWimHddCnnFIcppEGyortIMHRJoEhwIU6205bOo8lFszMU4xZDEJp7ZBHJOjAJDE7EhNlyR1jAJRWUZhHbR2Y4lRHOL70Vy+1VXEzjHcAIVW0Kftmn9/U5Xf7WD5qMxqMXQqfLBSapZpyEmnTU6hRlpjMYnmOI6KuUi2ESNZ5Y9p5gjuKttoWYenqBuA9Yd8H5pivRljXcCPOCOuSsadM33uOsDwAConm8jQVjwPen2/6V9IPZhF5pzHzBV3u48NqtE4XmkE6QRnwTdGljGh+BCmNsRp1QSMiJ4FpEg/vmgsmRNNB8MbjydR2BScxmOEkEDhgFI3ktbA0tMFxy5c0zbNptY8NGLrwB4CSM1narnOcSZJk8ytLw3SZck3lycK7Xv/AAcxq88YrbHqJBQQIQXRmSW1fPxUR1QjXxx/VSapxPVQq5XKHTDt7BJnkk03JZViIMYtNYNBkHHDT6puxtwTe0TiB3+H7ClWcQ1JiBWdojpps5pbM1FjhsEPKVXGLe9Bw7Q6JVpabuGYxCax6OQbx2S5XqiDDqbYJ1dSLGPjj6s96q6LF0zefYIq05YMYJHG8RBdzkYOGog5gThaOz3AkOF0jAg4EHmNFf8AEVDLG2+BDLPhI0UuyiHT0PcdPMJthLDBUugwEiNfhjP18VTKTC4QTH7bY7l+npLXsPFrjh9O5SQ1Tdp0jUFBwwwc1x5MLXD4kp6z7PnOSUHlmr4DNPe3kasFlLiOohaq07PD3U2gdo3Gd14Y93a+KZsFmbTEkiRpqpDLaQSWiHHC9q0RHZ4GNeas0Oinqsjk1UV/v+OoH4h4hHClGL5+/wCgbQfeqvI94+abdUJz/fPmU2gF18YpJL0ORlK22LQRIKQxbVTieqhV1LqnE9SotcLlkjpLG6LlIUNhxUsKREr7WZf0j4/sKccgFAGLz18sPkrBwTDjUJTQihLaFBk0LqDEFPtTdQYDqE61NY5Hq2c+zEatPyOirdo7CbXE+pUHquwP8rgM2+WivYRgKDZOPDtHN7ZsCpN19MgjVuI7uSjUdgWhhlokDjgfiut2DZ4rOg5ASTw4QnP/AMRwfdgHWdO/goP4ijaVou+NBvnqZGrZLlKkHC68AnEZF2JTTKZzMHpgPBXW8dAsq3SZ7LT4yqpdD4dpFj08dy5fL/U57XaqU8rp+wYRokAVopJcIAbb6ikYSUaQwaCJBIRaVTieqaqJdQ4nqU2VzR0VkY5qTOCjVQnKtTsE8imERbGJcrEqFYApyiTGoS2hAhKaFWyaHSOynaYwSWjBLp5KDJIMBKAQU3Zdnv1ANBie79UyW50h29qsu9k2a5TE5nE/IKYggtJKlSM9u3bMRvq379p40x8HOVAtJvwPvKZ4sPwP6rNra0/y0ZWf5jAgggrikOUaSjTUIOUaTKNKhFhUOJ6nzSZRVDiepRSubo6CxFYKDaLQAC3MnT6pVptLnG7SHV2n8v1TVPZZOZTNEkx+xVwp7HqA+xXQLpniD8kqk5wEx5Ktk0WKUFGpVpUhrlWyaJFPJLYk0sksKtk0GFothUIZeObj8Bl81QUaZc4NGZIHitfTYAABkBA7kRp429xRnlwkKQQQRYKZHfodqkeT/Nqyy1e/f+1/P/1WUla+m+UjM1HzGBBBGiCgCCJGkINBEgkImvOJ6lEUVQ4nqUAuco3kxQw0RG8eARylAqLRIQ2hxKdbRHXqgE40KDRNMadZR7OHkmiS3MR5HvU5tMlOizuOnkqpIsUiPQrKS0ph+zneyI5SI/RHTo1Bm0lVtMsTRd7AozULvdHxOA+ErRKq2A0Np4kBzjMa8B++atUdhjUALK7kBBBBWFZlN+mmKRjCXieZiPI+Cya6VtixCtSdT1IlvJwxH75rmrmxgRBGBHAhamjmnDb6Gdqo1K/UCCCCLBg0SCCQg0EEEhEl5xPU+aAKqhtZhcQSW4nPLPiMFNZVnoueao3CUCheTTaica5RZJMP0wRi0IwUd0cB4KDRNMNttI1SxtB3FIFJvAeCep2dnuhVtE0wxtJycbtQ8E7TslP3QpDLHT9wKDTJ2iK3ax4KTS26Rx8VIZZKfuN/pCdFnp+43+kfRJKS7ibj6Cae8nFPt3mZqETabPdb4BO+mpNzu+AVic/Urah6Ap7w03GAHEnIDGVRWjdiu4lwIJcScYGZnQlXTtr02+qJ+CZfttxyACuxaqWLm/oVZNMsnb6mcrbDtDf9px/Liof8LU/8b/6XfRa2ltg3g19QNnFXlFwcJm8DzkH5IvF4m58UC5PD9vc5igp22rJ6Ks9gymW/ldiPp3KDC14y3JNGbJU6AgggnImVres78x80dGs5uLSR0y8Mina9EXnZ+sfNJFIc1h0bJOs+1z7Ynm3PwP1VlZ7a13qunlr3g4qg9EOaMUhzUHEkmahtZONqqisVd18MJkEHPMRz+qtQ1QaJpkxtVOtrqC0JaraJosm2tOttqpy48UUcyo7R7Ls7SA1TT9rcFUXULqZxJWT6m03FMG1kqPdQuKLiSse9MTqnaNQ8fiozWJ272T0PkqpRLIsZo7Ta55JF4TAwBHALQbCruFWYLWOgBpOORkkaaYclQbBs7fS/yn5KfStTm2lgBwvREDG9ghVammgyaTi17FjvpR7VOoNQWnuxHmfBZpbbeBgdZnToWkdbwHkSsb6MLrtFk3YlfY5PVw25OBtBOCmEEXuQNR//2Q==',
      joinDate: '2024-01-10',
      status: 'Active'
    },
    {
      id: 3,
      name: 'Rose',
      email: 'Rose@gmqail.com',
      phone: '+91 98765 43215',
      room: 'F-26',
      department: 'ME',
      year: '1',
      parentName: 'David Johnson',
      parentPhone: '+91 98765 43216',
      guardianName: 'Nagendra',
      guardianPhone: '+91 98765 43217',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Bh2KfpLT7q4TW6VmHYJwTG8hDI5kSXhwcQ&s',
      joinDate: '2024-02-01',
      status: 'Active'
    },
    {
      id: 4,
      name: 'Luna',
      email: 'luna@gmail.com',
      phone: '+91 98765 43218',
      room: 'F-1',
      department: 'CE',
      year: '4',
      parentName: 'Sunil',
      parentPhone: '+91 98765 43219',
      guardianName: '',
      guardianPhone: '',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFU7GdtcTVp3O4baD7BopGgOTzYzRIW1oa9NScvzPOz36HMeTZDMxeb0vxrva4CvhNcJE&usqp=CAU',
      joinDate: '2023-08-15',
      status: 'Active'
    },
    {
      id: 5,
      name: 'Myra',
      email: 'Myra@gmail.com',
      phone: '+91 98765 43220',
      room: 'G-9',
      department: 'EEE',
      year: '2',
      parentName: 'Shivappa',
      parentPhone: '+91 98765 43221',
      guardianName: '',
      guardianPhone: '',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbzLAJCJ_5qtM8slH9N8MgTFQikGO5C9mSiyJSjD2MKGaweXL32J85Vzq1bOjfYcPA8rk&usqp=CAU',
      joinDate: '2024-01-20',
      status: 'Active'
    }
  ]);

  // Form state for new student registration
  const [newStudent, setNewStudent] = useState({
    name: '',
    email: '',
    phone: '',
    room: '',
    department: '',
    year: '',
    parentName: '',
    parentPhone: '',
    guardianName: '',
    guardianPhone: ''
  });

  // Search and filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('');
  const [filterYear, setFilterYear] = useState('');

  // State for complaints
  const [complaints, setComplaints] = useState([
    { 
      id: 1, 
      student: 'Luna', 
      room: 'g-8', 
      type: 'Room Related', 
      status: 'Pending', 
      date: '2024-03-15',
      description: 'AC not working properly, room getting too hot',
      estimatedDays: '',
      image: null
    },
    { 
      id: 2, 
      student: 'Myra', 
      room: 'f-26', 
      type: 'Mess Related', 
      status: 'In Progress', 
      date: '2024-03-14',
      description: 'Food quality issues in dinner',
      estimatedDays: '2',
      image: null
    },
    { 
      id: 3, 
      student: 'Arohi', 
      room: 'G-9', 
      type: 'Other', 
      status: 'Resolved', 
      date: '2024-03-13',
      description: 'WiFi connectivity issues',
      estimatedDays: '1',
      image: null
    }
  ]);

  // State for leave requests
  const [leaveRequests, setLeaveRequests] = useState([
    { 
      id: 1, 
      student: 'Luna', 
      room: 'G-8', 
      from: '2024-03-20', 
      to: '2024-03-22', 
      reason: 'Family function', 
      status: 'Pending',
      appliedDate: '2024-03-15'
    },
    { 
      id: 2, 
      student: 'Myra', 
      room: 'F-26', 
      from: '2024-03-18', 
      to: '2024-03-19', 
      reason: 'Medical appointment', 
      status: 'Approved',
      appliedDate: '2024-03-12'
    },
    { 
      id: 3, 
      student: 'Arohi', 
      room: 'F-5', 
      from: '2024-03-25', 
      to: '2024-03-27', 
      reason: 'Home visit', 
      status: 'Pending',
      appliedDate: '2024-03-16'
    }
  ]);

  // Enhanced attendance state with daily tracking
  const [attendanceData, setAttendanceData] = useState([
    { 
      room: 'G-8', 
      students: ['Luna', 'Shivappa'], 
      monthlyFee: 8000,
      daysInMonth: 31,
      daysPresent: 28,
      refundAmount: 774,
      refundStatus: 'Completed',
      lastUpdated: '2024-03-15',
      month: 'March 2024'
    },
    { 
      room: 'F-25', 
      students: ['Myra'], 
      monthlyFee: 8000,
      daysInMonth: 31,
      daysPresent: 25,
      refundAmount: 1548,
      refundStatus: 'Pending',
      lastUpdated: '2024-03-14',
      month: 'March 2024'
    },
    { 
      room: 'C-5', 
      students: ['Athulya', 'Krishna'], 
      monthlyFee: 8000,
      daysInMonth: 31,
      daysPresent: 29,
      refundAmount: 516,
      refundStatus: 'Processing',
      lastUpdated: '2024-03-13',
      month: 'March 2024'
    },
    { 
      room: 'G-9', 
      students: ['Sara'], 
      monthlyFee: 8000,
      daysInMonth: 31,
      daysPresent: 22,
      refundAmount: 2322,
      refundStatus: 'Completed',
      lastUpdated: '2024-03-12',
      month: 'March 2024'
    }
  ]);

  // State for refund requests
  const [refundRequests, setRefundRequests] = useState([
    {
      id: 1,
      student: 'Luna',
      room: 'G-8',
      month: 'March 2024',
      requestedAmount: 1548,
      reason: 'Home visit for 6 days',
      status: 'Pending',
      requestDate: '2024-03-16',
      documents: ['leave_letter.pdf']
    },
    {
      id: 2,
      student: 'Kushani',
      room: 'F-34',
      month: 'February 2024',
      requestedAmount: 2580,
      reason: 'Medical treatment for 10 days',
      status: 'Approved',
      requestDate: '2024-03-01',
      approvedDate: '2024-03-03',
      documents: ['medical_certificate.pdf', 'hospital_bill.pdf']
    }
  ]);

  const [editingComplaint, setEditingComplaint] = useState(null);
  const [editingAttendance, setEditingAttendance] = useState(null);
  const [showStudentForm, setShowStudentForm] = useState(false);

  const stats = {
    totalStudents: students.length,
    pendingComplaints: complaints.filter(c => c.status === 'Pending').length,
    leaveRequests: leaveRequests.filter(l => l.status === 'Pending').length,
    pendingRefunds: refundRequests.filter(r => r.status === 'Pending').length,
    totalRefundAmount: refundRequests.filter(r => r.status === 'Pending').reduce((sum, r) => sum + r.requestedAmount, 0),
    roomOccupancy: 90
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Users },
    { id: 'students', label: 'Student Management', icon: FileText },
    { id: 'complaints', label: 'Complaints', icon: MessageSquare },
    { id: 'leave', label: 'Leave Requests', icon: Calendar },
    { id: 'attendance', label: 'Attendance & Refunds', icon: TrendingUp },
    { id: 'refunds', label: 'Refund Requests', icon: DollarSign }
  ];

  const TabButton: React.FC<{ tab: any, isActive: boolean, onClick: () => void }> = ({ tab, isActive, onClick }) => (
    <button
      onClick={onClick}
      className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
        isActive 
          ? 'bg-blue-600 text-white shadow-lg transform scale-105' 
          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:transform hover:scale-102'
      }`}
    >
      <tab.icon className="h-4 w-4 mr-2" />
      {tab.label}
    </button>
  );

  // Calculate refund based on days absent
  const calculateRefund = (monthlyFee: number, daysInMonth: number, daysPresent: number) => {
    const daysAbsent = daysInMonth - daysPresent;
    const dailyRate = monthlyFee / daysInMonth;
    return Math.round(dailyRate * daysAbsent);
  };

  // Student management functions
  const handleStudentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newStudent.name || !newStudent.email || !newStudent.phone || !newStudent.room || 
        !newStudent.department || !newStudent.year || !newStudent.parentName || !newStudent.parentPhone) {
      alert('Please fill in all required fields');
      return;
    }

    const studentToAdd = {
      id: students.length + 1,
      ...newStudent,
      photo: `https://images.pexels.com/photos/${1000000 + Math.floor(Math.random() * 1000000)}/pexels-photo-${1000000 + Math.floor(Math.random() * 1000000)}.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop`,
      joinDate: new Date().toISOString().split('T')[0],
      status: 'Active'
    };

    setStudents(prev => [...prev, studentToAdd]);
    setNewStudent({
      name: '',
      email: '',
      phone: '',
      room: '',
      department: '',
      year: '',
      parentName: '',
      parentPhone: '',
      guardianName: '',
      guardianPhone: ''
    });
    setShowStudentForm(false);
    alert('Student added successfully!');
  };

  const handleInputChange = (field: string, value: string) => {
    setNewStudent(prev => ({ ...prev, [field]: value }));
  };

  // Filter students based on search and filters
  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.room.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = !filterDepartment || student.department === filterDepartment;
    const matchesYear = !filterYear || student.year === filterYear;
    
    return matchesSearch && matchesDepartment && matchesYear;
  });

  // Complaint management functions
  const updateComplaintStatus = (complaintId: number, newStatus: string, estimatedDays: string = '') => {
    setComplaints(prev => prev.map(complaint => 
      complaint.id === complaintId 
        ? { ...complaint, status: newStatus, estimatedDays }
        : complaint
    ));
    setEditingComplaint(null);
  };

  const handleComplaintEdit = (complaint: any) => {
    setEditingComplaint(complaint);
  };

  // Leave management functions
  const updateLeaveStatus = (leaveId: number, newStatus: string) => {
    setLeaveRequests(prev => prev.map(leave => 
      leave.id === leaveId 
        ? { ...leave, status: newStatus }
        : leave
    ));
  };

  // Attendance management functions
  const updateAttendance = (roomIndex: number, newDaysPresent: number) => {
    setAttendanceData(prev => prev.map((room, index) => {
      if (index === roomIndex) {
        const newRefundAmount = calculateRefund(room.monthlyFee, room.daysInMonth, newDaysPresent);
        return {
          ...room, 
          daysPresent: newDaysPresent,
          refundAmount: newRefundAmount,
          lastUpdated: new Date().toISOString().split('T')[0]
        };
      }
      return room;
    }));
    setEditingAttendance(null);
  };

  const updateRefundStatus = (roomIndex: number, newStatus: string) => {
    setAttendanceData(prev => prev.map((room, index) => 
      index === roomIndex 
        ? { ...room, refundStatus: newStatus }
        : room
    ));
  };

  // Refund request management
  const updateRefundRequestStatus = (requestId: number, newStatus: string) => {
    setRefundRequests(prev => prev.map(request => 
      request.id === requestId 
        ? { 
            ...request, 
            status: newStatus,
            ...(newStatus === 'Approved' ? { approvedDate: new Date().toISOString().split('T')[0] } : {})
          }
        : request
    ));
  };

  // Get current time greeting
  const getTimeGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  // On mount, merge localStorage data
  useEffect(() => {
    const storedComplaints = localStorage.getItem('complaints');
    if (storedComplaints) {
      const parsed = JSON.parse(storedComplaints);
      setComplaints(prev => ([...parsed, ...prev]));
    }
    const storedLeaves = localStorage.getItem('leaveRequests');
    if (storedLeaves) {
      const parsed = JSON.parse(storedLeaves);
      setLeaveRequests(prev => ([...parsed, ...prev]));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Personalized Header */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 rounded-2xl shadow-2xl overflow-hidden">
            <div className="px-8 py-12 relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-black/10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
              </div>
              
              <div className="relative flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
                {/* Warden Photo */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full ring-4 ring-white/30 ring-offset-4 ring-offset-transparent overflow-hidden shadow-2xl">
                      <img
                        src={wardenInfo.photo}
                        alt={wardenInfo.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2 shadow-lg">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Welcome Message & Info */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="mb-4">
                    <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                      {getTimeGreeting()}, {wardenInfo.name}!
                    </h1>
                    <p className="text-blue-100 text-lg">
                      Welcome back to your hostel management dashboard
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="flex items-center space-x-2 text-blue-100">
                        <User className="h-4 w-4" />
                        <span className="font-medium">{wardenInfo.title}</span>
                      </div>
                      <p className="text-white text-xs mt-1">{wardenInfo.experience} Experience</p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="flex items-center space-x-2 text-blue-100">
                        <Mail className="h-4 w-4" />
                        <span className="font-medium">Contact</span>
                      </div>
                      <p className="text-white text-xs mt-1 truncate">{wardenInfo.email}</p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="flex items-center space-x-2 text-blue-100">
                        <Home className="h-4 w-4" />
                        <span className="font-medium">{wardenInfo.department}</span>
                      </div>
                      <p className="text-white text-xs mt-1">Department Head</p>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="flex-shrink-0 flex space-x-3">
                  <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg">
                    <Bell className="h-5 w-5" />
                  </button>
                  <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg">
                    <Settings className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white transform hover:scale-105 transition-all duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">Total Students</p>
                <p className="text-2xl font-bold">{stats.totalStudents}</p>
              </div>
              <Users className="h-8 w-8 text-blue-200" />
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-6 text-white transform hover:scale-105 transition-all duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-emerald-100 text-sm">Pending Complaints</p>
                <p className="text-2xl font-bold">{stats.pendingComplaints}</p>
              </div>
              <MessageSquare className="h-8 w-8 text-emerald-200" />
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white transform hover:scale-105 transition-all duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm">Leave Requests</p>
                <p className="text-2xl font-bold">{stats.leaveRequests}</p>
              </div>
              <Calendar className="h-8 w-8 text-orange-200" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white transform hover:scale-105 transition-all duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">Occupancy</p>
                <p className="text-2xl font-bold">{stats.roomOccupancy}%</p>
              </div>
              <Home className="h-8 w-8 text-purple-200" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-rose-500 to-rose-600 rounded-xl p-6 text-white transform hover:scale-105 transition-all duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-rose-100 text-sm">Pending Refunds</p>
                <p className="text-2xl font-bold">{stats.pendingRefunds}</p>
              </div>
              <DollarSign className="h-8 w-8 text-rose-200" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl p-6 text-white transform hover:scale-105 transition-all duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-teal-100 text-sm">Refund Amount</p>
                <p className="text-xl font-bold">₹{stats.totalRefundAmount.toLocaleString()}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-teal-200" />
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
          <div className="border-b border-gray-200 dark:border-gray-700 px-6 py-4">
            <div className="flex flex-wrap gap-2">
              {tabs.map(tab => (
                <TabButton 
                  key={tab.id}
                  tab={tab}
                  isActive={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                />
              ))}
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 shadow-lg">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-blue-600" />
                      Recent Activities
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-600 rounded-lg shadow-sm border-l-4 border-blue-500">
                        <span className="text-sm text-gray-700 dark:text-gray-300">New complaint filed - Room 205</span>
                        <span className="text-xs text-gray-500 bg-gray-100 dark:bg-gray-500 px-2 py-1 rounded">2h ago</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-600 rounded-lg shadow-sm border-l-4 border-green-500">
                        <span className="text-sm text-gray-700 dark:text-gray-300">Leave request approved - John Doe</span>
                        <span className="text-xs text-gray-500 bg-gray-100 dark:bg-gray-500 px-2 py-1 rounded">4h ago</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-600 rounded-lg shadow-sm border-l-4 border-purple-500">
                        <span className="text-sm text-gray-700 dark:text-gray-300">Refund processed - ₹1,548</span>
                        <span className="text-xs text-gray-500 bg-gray-100 dark:bg-gray-500 px-2 py-1 rounded">6h ago</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-600 rounded-lg shadow-sm border-l-4 border-orange-500">
                        <span className="text-sm text-gray-700 dark:text-gray-300">New student registered - Room 110</span>
                        <span className="text-xs text-gray-500 bg-gray-100 dark:bg-gray-500 px-2 py-1 rounded">1d ago</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 shadow-lg">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                      <Plus className="h-5 w-5 mr-2 text-blue-600" />
                      Quick Actions
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <button 
                        onClick={() => setActiveTab('students')}
                        className="p-4 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105 shadow-lg"
                      >
                        <User className="h-6 w-6 mx-auto mb-2" />
                        <p className="text-sm font-medium">Add Student</p>
                      </button>
                      <button 
                        onClick={() => setActiveTab('complaints')}
                        className="p-4 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-lg hover:from-emerald-700 hover:to-emerald-800 transition-all duration-200 transform hover:scale-105 shadow-lg"
                      >
                        <MessageSquare className="h-6 w-6 mx-auto mb-2" />
                        <p className="text-sm font-medium">View Complaints</p>
                      </button>
                      <button 
                        onClick={() => setActiveTab('leave')}
                        className="p-4 bg-gradient-to-br from-orange-600 to-orange-700 text-white rounded-lg hover:from-orange-700 hover:to-orange-800 transition-all duration-200 transform hover:scale-105 shadow-lg"
                      >
                        <Calendar className="h-6 w-6 mx-auto mb-2" />
                        <p className="text-sm font-medium">Leave Requests</p>
                      </button>
                      <button 
                        onClick={() => setActiveTab('refunds')}
                        className="p-4 bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-200 transform hover:scale-105 shadow-lg"
                      >
                        <DollarSign className="h-6 w-6 mx-auto mb-2" />
                        <p className="text-sm font-medium">Refunds</p>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Monthly Summary */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                  <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
                    March 2024 Summary
                  </h3>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-800 dark:text-blue-200">
                        ₹{attendanceData.reduce((sum, room) => sum + room.refundAmount, 0).toLocaleString()}
                      </p>
                      <p className="text-sm text-blue-600 dark:text-blue-300">Total Refunds Due</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-800 dark:text-blue-200">
                        {attendanceData.reduce((sum, room) => sum + room.daysPresent, 0)}
                      </p>
                      <p className="text-sm text-blue-600 dark:text-blue-300">Total Days Present</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-800 dark:text-blue-200">
                        {attendanceData.filter(room => room.refundStatus === 'Completed').length}
                      </p>
                      <p className="text-sm text-blue-600 dark:text-blue-300">Refunds Processed</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-800 dark:text-blue-200">
                        {attendanceData.filter(room => room.refundStatus === 'Pending').length}
                      </p>
                      <p className="text-sm text-blue-600 dark:text-blue-300">Pending Refunds</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'students' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Student Management
                  </h3>
                  <button 
                    onClick={() => setShowStudentForm(!showStudentForm)}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105 shadow-lg"
                  >
                    <Plus className="h-4 w-4 inline mr-2" />
                    {showStudentForm ? 'Cancel' : 'Add New Student'}
                  </button>
                </div>

                {showStudentForm && (
                  <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 shadow-lg mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-6 text-lg">Student Registration Form</h4>
                    <form onSubmit={handleStudentSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            <User className="h-4 w-4 inline mr-1" />
                            Student Name *
                          </label>
                          <input 
                            type="text"
                            value={newStudent.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-600 text-gray-900 dark:text-white transition-all duration-200"
                            placeholder="Enter full name"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            <Phone className="h-4 w-4 inline mr-1" />
                            Mobile Number *
                          </label>
                          <input 
                            type="tel"
                            value={newStudent.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-600 text-gray-900 dark:text-white transition-all duration-200"
                            placeholder="Enter 10-digit mobile number"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            <Mail className="h-4 w-4 inline mr-1" />
                            Email Address *
                          </label>
                          <input 
                            type="email"
                            value={newStudent.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-600 text-gray-900 dark:text-white transition-all duration-200"
                            placeholder="Enter email address"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            <Home className="h-4 w-4 inline mr-1" />
                            Room Number *
                          </label>
                          <input 
                            type="text"
                            value={newStudent.room}
                            onChange={(e) => handleInputChange('room', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-600 text-gray-900 dark:text-white transition-all duration-200"
                            placeholder="Enter room number"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Department *
                          </label>
                          <select 
                            value={newStudent.department}
                            onChange={(e) => handleInputChange('department', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-600 text-gray-900 dark:text-white transition-all duration-200"
                            required
                          >
                            <option value="">Select Department</option>
                            <option value="CSE">Computer Science Engineering</option>
                            <option value="ECE">Electronics & Communication</option>
                            <option value="ME">Mechanical Engineering</option>
                            <option value="CE">Civil Engineering</option>
                            <option value="EEE">Electrical Engineering</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Year of Study *
                          </label>
                          <select 
                            value={newStudent.year}
                            onChange={(e) => handleInputChange('year', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-600 text-gray-900 dark:text-white transition-all duration-200"
                            required
                          >
                            <option value="">Select Year</option>
                            <option value="1">First Year</option>
                            <option value="2">Second Year</option>
                            <option value="3">Third Year</option>
                            <option value="4">Fourth Year</option>
                          </select>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 dark:border-gray-600 pt-6">
                        <h5 className="font-medium text-gray-900 dark:text-white mb-4">Parent/Guardian Information</h5>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              Parent Name *
                            </label>
                            <input 
                              type="text"
                              value={newStudent.parentName}
                              onChange={(e) => handleInputChange('parentName', e.target.value)}
                              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-600 text-gray-900 dark:text-white transition-all duration-200"
                              placeholder="Enter parent name"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              Parent Phone *
                            </label>
                            <input 
                              type="tel"
                              value={newStudent.parentPhone}
                              onChange={(e) => handleInputChange('parentPhone', e.target.value)}
                              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-600 text-gray-900 dark:text-white transition-all duration-200"
                              placeholder="Enter parent phone"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              Guardian Name (If different)
                            </label>
                            <input 
                              type="text"
                              value={newStudent.guardianName}
                              onChange={(e) => handleInputChange('guardianName', e.target.value)}
                              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-600 text-gray-900 dark:text-white transition-all duration-200"
                              placeholder="Enter guardian name (optional)"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              Guardian Phone
                            </label>
                            <input 
                              type="tel"
                              value={newStudent.guardianPhone}
                              onChange={(e) => handleInputChange('guardianPhone', e.target.value)}
                              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-600 text-gray-900 dark:text-white transition-all duration-200"
                              placeholder="Enter guardian phone (optional)"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex space-x-4">
                        <button
                          type="submit"
                          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105 shadow-lg font-medium"
                        >
                          Save Student Details
                        </button>
                        <button
                          type="button"
                          onClick={() => setNewStudent({
                            name: '',
                            email: '',
                            phone: '',
                            room: '',
                            department: '',
                            year: '',
                            parentName: '',
                            parentPhone: '',
                            guardianName: '',
                            guardianPhone: ''
                          })}
                          className="px-8 py-3 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-500 transition-all duration-200 font-medium"
                        >
                          Reset Form
                        </button>
                      </div>
                    </form>
                  </div>
                )}

                {/* Student List */}
                <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 shadow-lg">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 space-y-4 lg:space-y-0">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-lg">
                      Student Details ({filteredStudents.length} students)
                    </h4>
                    
                    {/* Search and Filter Controls */}
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <input
                          type="text"
                          placeholder="Search students..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-600 text-gray-900 dark:text-white text-sm"
                        />
                      </div>
                      
                      <select
                        value={filterDepartment}
                        onChange={(e) => setFilterDepartment(e.target.value)}
                        className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-600 text-gray-900 dark:text-white text-sm"
                      >
                        <option value="">All Departments</option>
                        <option value="CSE">CSE</option>
                        <option value="ECE">ECE</option>
                        <option value="ME">ME</option>
                        <option value="CE">CE</option>
                        <option value="EEE">EEE</option>
                      </select>
                      
                      <select
                        value={filterYear}
                        onChange={(e) => setFilterYear(e.target.value)}
                        className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-600 text-gray-900 dark:text-white text-sm"
                      >
                        <option value="">All Years</option>
                        <option value="1">1st Year</option>
                        <option value="2">2nd Year</option>
                        <option value="3">3rd Year</option>
                        <option value="4">4th Year</option>
                      </select>
                      
                      <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm">
                        <Download className="h-4 w-4 inline mr-1" />
                        Export
                      </button>
                    </div>
                  </div>

                  {/* Student Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredStudents.map(student => (
                      <div key={student.id} className="bg-white dark:bg-gray-600 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-500 hover:shadow-lg transition-shadow duration-200">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-500">
                            <img
                              src={student.photo}
                              alt={student.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h5 className="font-semibold text-gray-900 dark:text-white text-lg">
                              {student.name}
                            </h5>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                              Room {student.room}
                            </p>
                            <span className={`inline-block px-2 py-1 text-xs rounded-full font-medium ${
                              student.status === 'Active' 
                                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                                : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                            }`}>
                              {student.status}
                            </span>
                          </div>
                        </div>
                        
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-600 dark:text-gray-300 truncate">{student.email}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-600 dark:text-gray-300">{student.phone}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <FileText className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-600 dark:text-gray-300">{student.department} - Year {student.year}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <User className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-600 dark:text-gray-300">{student.parentName}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-600 dark:text-gray-300">Joined: {student.joinDate}</span>
                          </div>
                        </div>
                        
                        <div className="flex space-x-2 mt-4">
                          <button className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                            <Eye className="h-4 w-4 inline mr-1" />
                            View
                          </button>
                          <button className="flex-1 px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm">
                            <Edit2 className="h-4 w-4 inline mr-1" />
                            Edit
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {filteredStudents.length === 0 && (
                    <div className="text-center py-12">
                      <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500 dark:text-gray-400">No students found matching your criteria.</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'complaints' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Complaint Management
                </h3>
                <div className="space-y-6">
                  {complaints.map(complaint => (
                    <div key={complaint.id} className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-600">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <h4 className="font-semibold text-gray-900 dark:text-white text-lg">
                              {complaint.student} - Room {complaint.room}
                            </h4>
                            <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                              complaint.status === 'Pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                              complaint.status === 'In Progress' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                              'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                            }`}>
                              {complaint.status}
                            </span>
                          </div>
                          <div className="space-y-2 text-sm">
                            <p className="text-gray-600 dark:text-gray-300">
                              <strong className="text-gray-800 dark:text-gray-200">Type:</strong> {complaint.type}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300">
                              <strong className="text-gray-800 dark:text-gray-200">Description:</strong> {complaint.description}
                            </p>
                            <p className="text-gray-500 dark:text-gray-400 text-xs">
                              Filed on: {complaint.date}
                            </p>
                            {complaint.estimatedDays && (
                              <p className="text-blue-600 dark:text-blue-400 text-xs font-medium">
                                Estimated resolution: {complaint.estimatedDays} days
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                      {editingComplaint?.id === complaint.id ? (
                        <div className="bg-white dark:bg-gray-600 rounded-lg p-4 mt-4 border border-gray-200 dark:border-gray-500">
                          <h5 className="font-medium text-gray-900 dark:text-white mb-3">Update Complaint Status</h5>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Status
                              </label>
                              <select 
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                defaultValue={complaint.status}
                                id={`status-${complaint.id}`}
                              >
                                <option value="Pending">Pending</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Resolved">Resolved</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Estimated Days (if in progress)
                              </label>
                              <input 
                                type="number"
                                placeholder="Enter estimated days"
                                defaultValue={complaint.estimatedDays}
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                id={`days-${complaint.id}`}
                              />
                            </div>
                          </div>
                          <div className="flex space-x-2 mt-4">
                            <button
                              onClick={() => {
                                const statusSelect = document.getElementById(`status-${complaint.id}`) as HTMLSelectElement;
                                const daysInput = document.getElementById(`days-${complaint.id}`) as HTMLInputElement;
                                updateComplaintStatus(complaint.id, statusSelect.value, daysInput.value);
                              }}
                              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200 transform hover:scale-105"
                            >
                              <Check className="h-4 w-4 inline mr-1" />
                              Update
                            </button>
                            <button
                              onClick={() => setEditingComplaint(null)}
                              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all duration-200"
                            >
                              <X className="h-4 w-4 inline mr-1" />
                              Cancel
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex space-x-2 mt-4">
                          <button 
                            onClick={() => handleComplaintEdit(complaint)}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
                          >
                            <Edit2 className="h-4 w-4 inline mr-1" />
                            Update Status
                          </button>
                          <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all duration-200">
                            <Eye className="h-4 w-4 inline mr-1" />
                            View Details
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'leave' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Leave Request Management
                </h3>
                <div className="space-y-6">
                  {leaveRequests.map(leave => (
                    <div key={leave.id} className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-600">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <h4 className="font-semibold text-gray-900 dark:text-white text-lg">
                              {leave.student} - Room {leave.room}
                            </h4>
                            <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                              leave.status === 'Pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                              leave.status === 'Approved' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                              'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                            }`}>
                              {leave.status}
                            </span>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <p className="text-gray-600 dark:text-gray-300">
                              <strong className="text-gray-800 dark:text-gray-200">Leave Period:</strong> {leave.from} to {leave.to}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300">
                              <strong className="text-gray-800 dark:text-gray-200">Applied Date:</strong> {leave.appliedDate}
                            </p>
                            <p className="md:col-span-2 text-gray-600 dark:text-gray-300">
                              <strong className="text-gray-800 dark:text-gray-200">Reason:</strong> {leave.reason}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {leave.status === 'Pending' && (
                        <div className="flex space-x-2 mt-4">
                          <button 
                            onClick={() => updateLeaveStatus(leave.id, 'Approved')}
                            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200 transform hover:scale-105"
                          >
                            <Check className="h-4 w-4 inline mr-1" />
                            Approve
                          </button>
                          <button 
                            onClick={() => updateLeaveStatus(leave.id, 'Rejected')}
                            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-200 transform hover:scale-105"
                          >
                            <X className="h-4 w-4 inline mr-1" />
                            Reject
                          </button>
                        </div>
                      )}
                      
                      {leave.status !== 'Pending' && (
                        <div className="mt-4 p-3 bg-white dark:bg-gray-600 rounded-lg border border-gray-200 dark:border-gray-500">
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            <strong>Status:</strong> This leave request has been {leave.status.toLowerCase()}.
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'attendance' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Attendance & Refund Management
                </h3>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <AlertCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                    <div>
                      <h4 className="text-sm font-medium text-blue-800 dark:text-blue-200">Attendance & Refund System</h4>
                      <p className="text-xs text-blue-700 dark:text-blue-300 mt-1">
                        Track daily attendance and calculate monthly refunds automatically. Monthly fee: ₹8,000 per student.
                        Refund = (Days Absent ÷ Total Days) × Monthly Fee
                      </p>
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-600">
                    <thead className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-600 dark:to-gray-500">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                          Room & Students
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                          Month
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                          Days Present
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                          Refund Amount
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                          Refund Status
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                      {attendanceData.map((room, index) => (
                        <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-150">
                          <td className="px-6 py-4">
                            <div>
                              <div className="text-sm font-medium text-gray-900 dark:text-white">
                                Room {room.room}
                              </div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">
                                {room.students.join(', ')}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                            {room.month}
                            <div className="text-xs text-gray-500">
                              {room.daysInMonth} days total
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            {editingAttendance === index ? (
                              <div className="flex items-center space-x-2">
                                <input 
                                  type="number"
                                  min="0"
                                  max={room.daysInMonth}
                                  defaultValue={room.daysPresent}
                                  className="w-16 px-2 py-1 border border-gray-300 dark:border-gray-500 rounded focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-600 text-gray-900 dark:text-white text-sm"
                                  id={`days-present-${index}`}
                                />
                                <span className="text-xs text-gray-500">/{room.daysInMonth}</span>
                                <button
                                  onClick={() => {
                                    const input = document.getElementById(`days-present-${index}`) as HTMLInputElement;
                                    updateAttendance(index, parseInt(input.value));
                                  }}
                                  className="px-2 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                                >
                                  <Check className="h-3 w-3" />
                                </button>
                                <button
                                  onClick={() => setEditingAttendance(null)}
                                  className="px-2 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
                                >
                                  <X className="h-3 w-3" />
                                </button>
                              </div>
                            ) : (
                              <div>
                                <span className="text-sm font-medium text-gray-900 dark:text-white">
                                  {room.daysPresent}/{room.daysInMonth}
                                </span>
                                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mt-1">
                                  <div 
                                    className={`h-2 rounded-full ${
                                      (room.daysPresent / room.daysInMonth) * 100 >= 90 ? 'bg-green-500' :
                                      (room.daysPresent / room.daysInMonth) * 100 >= 80 ? 'bg-yellow-500' :
                                      'bg-red-500'
                                    }`}
                                    style={{ width: `${(room.daysPresent / room.daysInMonth) * 100}%` }}
                                  ></div>
                                </div>
                                <span className="text-xs text-gray-500">
                                  {Math.round((room.daysPresent / room.daysInMonth) * 100)}% attendance
                                </span>
                              </div>
                            )}
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                              ₹{room.refundAmount.toLocaleString()}
                            </div>
                            <div className="text-xs text-gray-500">
                              {room.daysInMonth - room.daysPresent} days absent
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <select 
                              value={room.refundStatus}
                              onChange={(e) => updateRefundStatus(index, e.target.value)}
                              className={`px-3 py-1 border border-gray-300 dark:border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-600 text-sm ${
                                room.refundStatus === 'Pending' ? 'text-yellow-800 bg-yellow-50 dark:bg-yellow-900/30' :
                                room.refundStatus === 'Processing' ? 'text-blue-800 bg-blue-50 dark:bg-blue-900/30' :
                                'text-green-800 bg-green-50 dark:bg-green-900/30'
                              }`}
                            >
                              <option value="Pending">Pending</option>
                              <option value="Processing">Processing</option>
                              <option value="Completed">Completed</option>
                            </select>
                          </td>
                          <td className="px-6 py-4">
                            <button 
                              onClick={() => setEditingAttendance(index)}
                              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors mr-2"
                              disabled={editingAttendance === index}
                            >
                              <Edit2 className="h-4 w-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'refunds' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Refund Request Management
                </h3>
                
                <div className="grid lg:grid-cols-3 gap-6 mb-6">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-green-600 dark:text-green-400 text-sm">Total Pending</p>
                        <p className="text-2xl font-bold text-green-800 dark:text-green-200">
                          ₹{refundRequests.filter(r => r.status === 'Pending').reduce((sum, r) => sum + r.requestedAmount, 0).toLocaleString()}
                        </p>
                      </div>
                      <DollarSign className="h-8 w-8 text-green-600 dark:text-green-400" />
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-blue-600 dark:text-blue-400 text-sm">Approved This Month</p>
                        <p className="text-2xl font-bold text-blue-800 dark:text-blue-200">
                          ₹{refundRequests.filter(r => r.status === 'Approved').reduce((sum, r) => sum + r.requestedAmount, 0).toLocaleString()}
                        </p>
                      </div>
                      <Check className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-purple-600 dark:text-purple-400 text-sm">Pending Requests</p>
                        <p className="text-2xl font-bold text-purple-800 dark:text-purple-200">
                          {refundRequests.filter(r => r.status === 'Pending').length}
                        </p>
                      </div>
                      <Clock className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  {refundRequests.map(request => (
                    <div key={request.id} className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-600">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <h4 className="font-semibold text-gray-900 dark:text-white text-lg">
                              {request.student} - Room {request.room}
                            </h4>
                            <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                              request.status === 'Pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                              request.status === 'Approved' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                              'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                            }`}>
                              {request.status}
                            </span>
                          </div>
                          
                          <div className="grid md:grid-cols-2 gap-4 text-sm mb-4">
                            <p className="text-gray-600 dark:text-gray-300">
                              <strong className="text-gray-800 dark:text-gray-200">Month:</strong> {request.month}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300">
                              <strong className="text-gray-800 dark:text-gray-200">Requested Amount:</strong> ₹{request.requestedAmount.toLocaleString()}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300">
                              <strong className="text-gray-800 dark:text-gray-200">Request Date:</strong> {request.requestDate}
                            </p>
                            {request.approvedDate && (
                              <p className="text-gray-600 dark:text-gray-300">
                                <strong className="text-gray-800 dark:text-gray-200">Approved Date:</strong> {request.approvedDate}
                              </p>
                            )}
                            <p className="md:col-span-2 text-gray-600 dark:text-gray-300">
                              <strong className="text-gray-800 dark:text-gray-200">Reason:</strong> {request.reason}
                            </p>
                          </div>

                          {request.documents && request.documents.length > 0 && (
                            <div className="mb-4">
                              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Documents:</p>
                              <div className="flex flex-wrap gap-2">
                                {request.documents.map((doc, index) => (
                                  <span key={index} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs rounded-lg">
                                    {doc}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {request.status === 'Pending' && (
                        <div className="flex space-x-2">
                          <button 
                            onClick={() => updateRefundRequestStatus(request.id, 'Approved')}
                            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200 transform hover:scale-105"
                          >
                            <Check className="h-4 w-4 inline mr-1" />
                            Approve Refund
                          </button>
                          <button 
                            onClick={() => updateRefundRequestStatus(request.id, 'Rejected')}
                            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-200 transform hover:scale-105"
                          >
                            <X className="h-4 w-4 inline mr-1" />
                            Reject
                          </button>
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200">
                            <Eye className="h-4 w-4 inline mr-1" />
                            View Documents
                          </button>
                        </div>
                      )}
                      
                      {request.status !== 'Pending' && (
                        <div className="p-3 bg-white dark:bg-gray-600 rounded-lg border border-gray-200 dark:border-gray-500">
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            <strong>Status:</strong> This refund request has been {request.status.toLowerCase()}.
                            {request.status === 'Approved' && (
                              <span className="text-green-600 dark:text-green-400 ml-2">
                                Amount: ₹{request.requestedAmount.toLocaleString()}
                              </span>
                            )}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WardenDashboard;