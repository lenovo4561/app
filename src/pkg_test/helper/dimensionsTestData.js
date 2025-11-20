/**
 * 五大维度心理测评数据
 * 包含：情感维度、性格维度、事业维度、家庭维度、趣味维度
 * 每个维度包含多套测试题目及评分规则
 */

// 五大维度数据
export const dimensionsData = {
  emotion: {
    id: 'emotion',
    name: '情感维度',
    description: '评估你的情感共情力、安全感、冲突处理能力和情感表达倾向',
    tests: [
      {
        id: 'emotion_1',
        title: '你的情感共情力有多强？',
        questions: [
          {
            id: 1,
            question: '朋友向你倾诉工作受挫大哭时，你第一反应是？',
            options: [
              {
                label: 'A',
                text: '递纸巾并说"我懂这种难受"',
                score: 4
              },
              {
                label: 'B',
                text: '立刻帮他分析问题解决方案',
                score: 3
              },
              {
                label: 'C',
                text: '有点手足无措，只能说"别难过了"',
                score: 2
              },
              {
                label: 'D',
                text: '觉得有点夸张，转移话题',
                score: 1
              }
            ]
          },
          {
            id: 2,
            question: '看电影时，你会因为主角的悲惨经历而流泪吗？',
            options: [
              {
                label: 'A',
                text: '经常，完全代入剧情',
                score: 4
              },
              {
                label: 'B',
                text: '偶尔，遇到特别戳人的情节会',
                score: 3
              },
              {
                label: 'C',
                text: '很少，只有亲身经历过的类似情节才会',
                score: 2
              },
              {
                label: 'D',
                text: '从不，觉得是虚构的没必要',
                score: 1
              }
            ]
          },
          {
            id: 3,
            question: '伴侣因为小事闹情绪沉默时，你会？',
            options: [
              {
                label: 'A',
                text: '安静陪在身边，等他愿意说再倾听',
                score: 4
              },
              {
                label: 'B',
                text: '反复追问"你到底怎么了"',
                score: 3
              },
              {
                label: 'C',
                text: '给对方空间，等他自己调整好',
                score: 2
              },
              {
                label: 'D',
                text: '觉得无理取闹，自己也生气',
                score: 1
              }
            ]
          },
          {
            id: 4,
            question: '同事因为失误被批评，你会？',
            options: [
              {
                label: 'A',
                text: '私下安慰他，肯定他平时的努力',
                score: 4
              },
              {
                label: 'B',
                text: '提醒他下次注意避免失误',
                score: 3
              },
              {
                label: 'C',
                text: '假装没看见，怕卷入是非',
                score: 2
              },
              {
                label: 'D',
                text: '觉得是他自己不够认真，活该',
                score: 1
              }
            ]
          },
          {
            id: 5,
            question: '看到陌生人在公共场合遇到困难（如提重物），你会？',
            options: [
              {
                label: 'A',
                text: '主动上前帮忙并询问是否需要协助',
                score: 4
              },
              {
                label: 'B',
                text: '观察一会儿，确认对方真的需要再帮忙',
                score: 3
              },
              {
                label: 'C',
                text: '心里想帮忙，但不好意思主动开口',
                score: 2
              },
              {
                label: 'D',
                text: '觉得和自己无关，直接走开',
                score: 1
              }
            ]
          }
        ],
        scoring: {
          ranges: [
            {
              min: 16,
              max: 20,
              level: '高共情力者',
              title: '你的情感共情力整体优秀',
              content:
                '你是天生的"情感捕手"，总能精准捕捉到他人的情绪波动。当朋友受挫时，你不会急于给出解决方案，而是先给予情感支持，让对方感受到被理解；看电影时能深度代入剧情，对陌生人的困境也抱有同理心。这种特质让你在人际关系中极具吸引力，身边人都愿意向你倾诉。但要注意，过度共情可能会让你承担过多他人的负面情绪，建议学会适当"情感抽离"，给自己留出调整心态的空间。'
            },
            {
              min: 11,
              max: 15,
              level: '中等共情力者',
              title: '你的情感共情力良好',
              content:
                '你具备基本的共情能力，在熟悉的人面前能很好地表达关心，面对明显的情绪信号时能做出恰当反应。比如伴侣沉默时，你知道要给予陪伴或关心；同事受挫时，会给予基本的安慰。但在面对陌生人或不熟悉的场景时，共情反应会稍显迟钝。建议多观察他人的微表情和肢体语言，进一步提升对隐性情绪的感知力。'
            },
            {
              min: 5,
              max: 10,
              level: '低共情力者',
              title: '你的情感共情力需要提升',
              content:
                '你更倾向于理性看待问题，不太容易被他人的情绪影响。朋友倾诉时你会直接给解决方案，对他人的负面情绪甚至会觉得"夸张"。这种特质让你在处理复杂问题时更冷静，但也容易给人"冷漠""不近人情"的印象。建议在人际交往中多尝试"换位思考"，比如听到他人的困境时，先问自己"如果是我会怎么想"，逐步培养共情意识。'
            }
          ]
        }
      },
      {
        id: 'emotion_2',
        title: '你在亲密关系中的安全感源自哪里？',
        questions: [
          {
            id: 1,
            question: '伴侣忘记回复你的消息，你会怎么想？',
            options: [
              {
                label: 'A',
                text: '他可能在忙，晚点会回，先做自己的事',
                score: 4
              },
              {
                label: 'B',
                text: '有点担心，发一条关心的消息问问情况',
                score: 3
              },
              {
                label: 'C',
                text: '心里不安，反复看手机等回复',
                score: 2
              },
              {
                label: 'D',
                text: '觉得他不在乎自己，开始生气',
                score: 1
              }
            ]
          },
          {
            id: 2,
            question: '关于伴侣的社交圈，你更倾向于？',
            options: [
              {
                label: 'A',
                text: '他有自己的空间，不用事事向我报备',
                score: 4
              },
              {
                label: 'B',
                text: '偶尔和我分享社交动态，我也会分享我的',
                score: 3
              },
              {
                label: 'C',
                text: '希望他主动告知和谁见面，什么时候回来',
                score: 2
              },
              {
                label: 'D',
                text: '必须知道他所有社交对象，最好带我一起去',
                score: 1
              }
            ]
          },
          {
            id: 3,
            question: '当亲密关系出现矛盾时，你会？',
            options: [
              {
                label: 'A',
                text: '冷静下来后主动沟通，一起解决问题',
                score: 4
              },
              {
                label: 'B',
                text: '等对方先低头，再一起沟通',
                score: 3
              },
              {
                label: 'C',
                text: '担心矛盾升级，暂时回避不谈',
                score: 2
              },
              {
                label: 'D',
                text: '翻旧账证明自己没错，要求对方道歉',
                score: 1
              }
            ]
          },
          {
            id: 4,
            question: '你会因为伴侣比自己优秀而感到不安吗？',
            options: [
              {
                label: 'A',
                text: '不会，他的优秀能带动我一起进步',
                score: 4
              },
              {
                label: 'B',
                text: '偶尔会，但会努力提升自己追赶',
                score: 3
              },
              {
                label: 'C',
                text: '经常会，担心自己配不上他',
                score: 2
              },
              {
                label: 'D',
                text: '会，甚至希望他不要太优秀',
                score: 1
              }
            ]
          },
          {
            id: 5,
            question: '对于亲密关系中的承诺，你认为？',
            options: [
              {
                label: 'A',
                text: '承诺是相互的，双方共同努力实现就好',
                score: 4
              },
              {
                label: 'B',
                text: '承诺很重要，需要尽力兑现',
                score: 3
              },
              {
                label: 'C',
                text: '只要对方兑现承诺，我就有安全感',
                score: 2
              },
              {
                label: 'D',
                text: '必须严格兑现每一个承诺，否则就是不爱',
                score: 1
              }
            ]
          }
        ],
        scoring: {
          ranges: [
            {
              min: 16,
              max: 20,
              level: '内在安全感型',
              title: '你的心理安全感源自内心',
              content:
                '你的安全感完全源自自身，不依赖伴侣的行为来确认爱意。你尊重伴侣的个人空间，相信彼此的信任基础，即使对方没及时回复消息也不会焦虑。在亲密关系中，你保持独立的人格，不会因为伴侣优秀而自卑，反而能以积极的心态共同成长。这种健康的安全感让你的亲密关系充满弹性，不易被小事引发矛盾。建议继续保持独立的自我，同时多和伴侣分享内心感受，让关系更亲密。'
            },
            {
              min: 11,
              max: 15,
              level: '平衡安全感型',
              title: '你的心理安全感比较平衡',
              content:
                '你的安全感部分源自自身，部分依赖亲密关系的互动。你能理解伴侣需要个人空间，但也希望通过一定的沟通和承诺来确认关系的稳定性。当关系出现矛盾时，你愿意沟通解决，但偶尔会等待对方先主动。这种状态比较符合大多数人的亲密关系模式，建议在遇到不安时，主动向伴侣表达需求，而不是默默等待，能进一步提升关系质量。'
            },
            {
              min: 5,
              max: 10,
              level: '外在安全感型',
              title: '你的心理安全感需要关注',
              content:
                '你的安全感严重依赖伴侣的外在行为，需要通过伴侣的报备、承诺甚至"服从"来确认自己被爱。伴侣的一点疏忽就会引发你的焦虑，甚至会通过控制对方的社交来获取安全感。这种状态容易给伴侣带来压迫感，长期可能导致关系紧张。建议先关注自我成长，培养自己的兴趣爱好和社交圈，减少对伴侣的过度依赖，明白真正的安全感只能自己给予。'
            }
          ]
        }
      },
      {
        id: 'emotion_3',
        title: '你处理情感冲突的能力等级？',
        questions: [
          {
            id: 1,
            question: '当与伴侣发生激烈争吵时，你会？',
            options: [
              { label: 'A', text: '先冷静下来，等情绪平复后再沟通', score: 4 },
              { label: 'B', text: '虽然生气，但还是会尝试讲道理', score: 3 },
              { label: 'C', text: '控制不住情绪，大声争吵', score: 2 },
              { label: 'D', text: '直接冷战，拒绝任何交流', score: 1 }
            ]
          },
          {
            id: 2,
            question: '如果发现自己误解了对方，你会？',
            options: [
              { label: 'A', text: '立刻真诚道歉，并解释原因', score: 4 },
              { label: 'B', text: '会道歉，但觉得面子上过不去', score: 3 },
              { label: 'C', text: '含糊其辞，希望事情过去', score: 2 },
              { label: 'D', text: '死不承认，觉得对方也有错', score: 1 }
            ]
          },
          {
            id: 3,
            question: '面对对方的指责，你的第一反应是？',
            options: [
              { label: 'A', text: '反思自己是否有做得不对的地方', score: 4 },
              { label: 'B', text: '虽然不爽，但会听听对方怎么说', score: 3 },
              { label: 'C', text: '立刻反驳，指出对方的错误', score: 2 },
              { label: 'D', text: '愤怒离场，不想听任何话', score: 1 }
            ]
          },
          {
            id: 4,
            question: '冲突解决后，你会怎么做？',
            options: [
              { label: 'A', text: '总结经验，避免下次再犯', score: 4 },
              { label: 'B', text: '和对方约定以后怎么处理', score: 3 },
              { label: 'C', text: '当做什么都没发生过', score: 2 },
              { label: 'D', text: '心里还有疙瘩，时不时翻旧账', score: 1 }
            ]
          },
          {
            id: 5,
            question: '你认为冲突对关系的意义是？',
            options: [
              { label: 'A', text: '是了解彼此、加深感情的机会', score: 4 },
              { label: 'B', text: '是不可避免的磨合过程', score: 3 },
              { label: 'C', text: '是麻烦，最好永远不要有', score: 2 },
              { label: 'D', text: '是感情破裂的征兆', score: 1 }
            ]
          }
        ],
        scoring: {
          ranges: [
            {
              min: 16,
              max: 20,
              level: '冲突化解高手',
              title: '你是冲突化解高手',
              content: '你具备极高的情感智慧，能将冲突转化为增进感情的契机。'
            },
            {
              min: 11,
              max: 15,
              level: '理性应对者',
              title: '你能理性应对冲突',
              content: '你通常能理性看待冲突，但在情绪控制上还有提升空间。'
            },
            {
              min: 5,
              max: 10,
              level: '冲突回避者',
              title: '你倾向于回避冲突',
              content: '你对冲突感到恐惧或不知所措，建议学习更积极的沟通技巧。'
            }
          ]
        }
      },
      {
        id: 'emotion_4',
        title: '你对情感的表达倾向是怎样的？',
        questions: [
          {
            id: 1,
            question: '你想念某人时，会怎么做？',
            options: [
              { label: 'A', text: '直接告诉他"我想你了"', score: 4 },
              { label: 'B', text: '找个借口联系他，暗示想念', score: 3 },
              { label: 'C', text: '默默关注他的动态，不打扰', score: 2 },
              { label: 'D', text: '压抑自己的思念，假装不在乎', score: 1 }
            ]
          },
          {
            id: 2,
            question: '收到礼物时，你会如何表达感谢？',
            options: [
              { label: 'A', text: '热情表达喜爱，并回赠礼物', score: 4 },
              { label: 'B', text: '礼貌道谢，心里很开心', score: 3 },
              { label: 'C', text: '简单说声谢谢，有些不好意思', score: 2 },
              { label: 'D', text: '觉得对方破费，反而责怪对方', score: 1 }
            ]
          },
          {
            id: 3,
            question: '你如何表达对伴侣的爱意？',
            options: [
              { label: 'A', text: '经常说"我爱你"，并有肢体接触', score: 4 },
              { label: 'B', text: '通过行动照顾对方生活起居', score: 3 },
              { label: 'C', text: '偶尔在特殊节日表达一下', score: 2 },
              { label: 'D', text: '觉得爱在心里，不需要表达', score: 1 }
            ]
          },
          {
            id: 4,
            question: '当朋友取得成就时，你会？',
            options: [
              { label: 'A', text: '真诚祝贺，为他感到高兴', score: 4 },
              { label: 'B', text: '点赞评论，简单祝福', score: 3 },
              { label: 'C', text: '心里羡慕，嘴上不说', score: 2 },
              { label: 'D', text: '觉得他只是运气好，有些嫉妒', score: 1 }
            ]
          },
          {
            id: 5,
            question: '你习惯用哪种方式表达情感？',
            options: [
              { label: 'A', text: '语言、行动、肢体接触全方位', score: 4 },
              { label: 'B', text: '主要靠行动，不善言辞', score: 3 },
              { label: 'C', text: '主要靠文字，当面说不出口', score: 2 },
              { label: 'D', text: '很少表达，希望对方能懂', score: 1 }
            ]
          }
        ],
        scoring: {
          ranges: [
            {
              min: 16,
              max: 20,
              level: '热情表达者',
              title: '你是热情的情感表达者',
              content: '你善于用多种方式表达情感，让身边人感到温暖和被爱。'
            },
            {
              min: 11,
              max: 15,
              level: '含蓄表达者',
              title: '你是含蓄的情感表达者',
              content:
                '你更倾向于用行动或委婉的方式表达，虽然真诚但有时不够直接。'
            },
            {
              min: 5,
              max: 10,
              level: '情感内敛者',
              title: '你是情感内敛者',
              content:
                '你不习惯表达情感，容易让人产生距离感，建议尝试多开口表达爱。'
            }
          ]
        }
      }
    ]
  },
  personality: {
    id: 'personality',
    name: '性格维度',
    description: '评估你的外向/内向倾向、做事风格、乐观/悲观倾向和责任心',
    tests: [
      {
        id: 'personality_1',
        title: '你是典型的外向者还是内向者？',
        questions: [
          {
            id: 1,
            question: '周末休息时，你更愿意？',
            options: [
              {
                label: 'A',
                text: '和朋友聚会逛街，越热闹越好',
                score: 4
              },
              {
                label: 'B',
                text: '一半时间和朋友玩，一半时间独处',
                score: 3
              },
              {
                label: 'C',
                text: '在家看书追剧，偶尔和家人散步',
                score: 2
              },
              {
                label: 'D',
                text: '完全独处，不希望被人打扰',
                score: 1
              }
            ]
          },
          {
            id: 2,
            question: '开会时，你会主动发表自己的观点吗？',
            options: [
              {
                label: 'A',
                text: '经常主动发言，甚至带动讨论',
                score: 4
              },
              {
                label: 'B',
                text: '有把握时会主动发言，没把握时倾听',
                score: 3
              },
              {
                label: 'C',
                text: '被点名时才会发言，不主动',
                score: 2
              },
              {
                label: 'D',
                text: '就算被点名也尽量少说，怕说错',
                score: 1
              }
            ]
          },
          {
            id: 3,
            question: '遇到不开心的事，你会？',
            options: [
              {
                label: 'A',
                text: '找朋友倾诉，吐槽完就好了',
                score: 4
              },
              {
                label: 'B',
                text: '先自己消化，实在不行再找朋友说',
                score: 3
              },
              {
                label: 'C',
                text: '自己默默消化，很少和别人说',
                score: 2
              },
              {
                label: 'D',
                text: '把自己关起来，拒绝和任何人交流',
                score: 1
              }
            ]
          },
          {
            id: 4,
            question: '去陌生的地方，你能快速适应并认识新朋友吗？',
            options: [
              {
                label: 'A',
                text: '能，很快就能和陌生人聊起来',
                score: 4
              },
              {
                label: 'B',
                text: '慢慢适应，会主动和身边人打招呼',
                score: 3
              },
              {
                label: 'C',
                text: '适应很慢，只和熟悉的人待在一起',
                score: 2
              },
              {
                label: 'D',
                text: '很难适应，全程沉默不说话',
                score: 1
              }
            ]
          },
          {
            id: 5,
            question: '完成一项复杂任务后，你会通过什么方式放松？',
            options: [
              {
                label: 'A',
                text: '和同事或朋友去聚餐唱歌',
                score: 4
              },
              {
                label: 'B',
                text: '和家人一起吃饭看电影',
                score: 3
              },
              {
                label: 'C',
                text: '在家泡杯茶，安静看会儿书',
                score: 2
              },
              {
                label: 'D',
                text: '关掉手机，好好睡一觉',
                score: 1
              }
            ]
          }
        ],
        scoring: {
          ranges: [
            {
              min: 16,
              max: 20,
              level: '典型外向者',
              title: '你是典型的外向性格',
              content:
                '你是天生的"社交小太阳"，精力来源于和他人的互动。周末喜欢和朋友聚会，开会时主动发言带动讨论，遇到不开心的事会通过倾诉来缓解。在陌生环境中，你能快速适应并认识新朋友，完成任务后也倾向于通过热闹的方式放松。这种性格让你在社交场合如鱼得水，容易积累人脉资源。但要注意，过度社交可能会让你忽略自我反思的时间，建议每周留1-2天独处，给自己充电。'
            },
            {
              min: 11,
              max: 15,
              level: '中间型性格',
              title: '你兼具内外向特质',
              content:
                '你兼具外向和内向的特质，能根据场景灵活调整自己的状态。周末会平衡社交和独处时间，开会时有把握就发言，没把握就倾听，遇到问题会先自己消化再决定是否倾诉。这种"弹性性格"让你既能适应热闹的社交场合，也能享受独处的宁静，在人际关系和自我成长中找到平衡。建议继续保持这种状态，根据自己的精力分配社交和独处时间。'
            },
            {
              min: 5,
              max: 10,
              level: '典型内向者',
              title: '你是典型的内向性格',
              content:
                '你是"安静的思考者"，精力来源于独处。周末更喜欢在家看书追剧，开会时不主动发言，遇到不开心的事会默默消化。在陌生环境中，你需要很长时间适应，完成任务后倾向于通过安静的方式放松。这种性格让你善于思考和反思，做事更专注细致。但要注意，过度内向可能会让你错过一些社交机会，建议偶尔主动参与小型社交活动，拓展自己的圈子。'
            }
          ]
        }
      },
      {
        id: 'personality_2',
        title: '你的做事风格是果断型还是谨慎型？',
        questions: [
          {
            id: 1,
            question: '面对突发状况，你的第一反应是？',
            options: [
              { label: 'A', text: '迅速做出决定，先行动再说', score: 4 },
              { label: 'B', text: '快速分析利弊，然后行动', score: 3 },
              { label: 'C', text: '犹豫不决，想听听别人的意见', score: 2 },
              { label: 'D', text: '感到恐慌，不知所措', score: 1 }
            ]
          },
          {
            id: 2,
            question: '做计划时，你倾向于？',
            options: [
              { label: 'A', text: '定个大方向，细节边做边调整', score: 4 },
              { label: 'B', text: '制定详细计划，但也留有余地', score: 3 },
              { label: 'C', text: '反复推敲细节，生怕出错', score: 2 },
              { label: 'D', text: '不喜欢做计划，随遇而安', score: 1 }
            ]
          },
          {
            id: 3,
            question: '买东西时，你会？',
            options: [
              { label: 'A', text: '看中就买，不纠结', score: 4 },
              { label: 'B', text: '对比几家，选性价比高的', score: 3 },
              { label: 'C', text: '反复纠结，最后可能还是没买', score: 2 },
              { label: 'D', text: '完全看心情，冲动消费', score: 1 }
            ]
          },
          {
            id: 4,
            question: '朋友请你帮忙，你会？',
            options: [
              { label: 'A', text: '爽快答应，立刻去办', score: 4 },
              { label: 'B', text: '评估自己能力，能帮就帮', score: 3 },
              { label: 'C', text: '犹豫很久，怕麻烦又不好意思拒绝', score: 2 },
              { label: 'D', text: '找借口推脱', score: 1 }
            ]
          },
          {
            id: 5,
            question: '遇到困难，你会？',
            options: [
              { label: 'A', text: '迎难而上，寻找突破口', score: 4 },
              { label: 'B', text: '冷静分析，寻找解决方案', score: 3 },
              { label: 'C', text: '担心失败，迟迟不敢行动', score: 2 },
              { label: 'D', text: '直接放弃', score: 1 }
            ]
          }
        ],
        scoring: {
          ranges: [
            {
              min: 16,
              max: 20,
              level: '果断行动派',
              title: '你是果断行动派',
              content:
                '你做事雷厉风行，决策迅速，执行力强。面对机会能迅速抓住，面对困难能迎难而上。但有时可能过于冲动，建议在做重大决定前多思考三分钟。'
            },
            {
              min: 11,
              max: 15,
              level: '稳健平衡派',
              title: '你是稳健平衡派',
              content:
                '你既有行动力，又懂得深思熟虑。在决策时能权衡利弊，制定合理的计划。这种风格让你在大多数情况下都能稳步前进。'
            },
            {
              min: 5,
              max: 10,
              level: '谨慎思考派',
              title: '你是谨慎思考派',
              content:
                '你做事非常谨慎，追求完美，生怕出错。这让你在细节上表现出色，但有时过度的犹豫会让你错失良机。建议试着接受不完美，勇敢迈出第一步。'
            }
          ]
        }
      },
      {
        id: 'personality_3',
        title: '你是乐观主义者还是悲观主义者？',
        questions: [
          {
            id: 1,
            question: '半杯水放在桌上，你看到的是？',
            options: [
              { label: 'A', text: '太好了，还有半杯水', score: 4 },
              { label: 'B', text: '还剩半杯水，不错', score: 3 },
              { label: 'C', text: '怎么只有半杯水了', score: 2 },
              { label: 'D', text: '完了，水快没了', score: 1 }
            ]
          },
          {
            id: 2,
            question: '遇到挫折时，你会想？',
            options: [
              { label: 'A', text: '这是成长的机会，我会变得更强', score: 4 },
              { label: 'B', text: '虽然很难，但我能挺过去', score: 3 },
              { label: 'C', text: '为什么倒霉的总是我', score: 2 },
              { label: 'D', text: '我注定是个失败者', score: 1 }
            ]
          },
          {
            id: 3,
            question: '对未来的看法，你是？',
            options: [
              { label: 'A', text: '充满希望，相信明天会更好', score: 4 },
              { label: 'B', text: '谨慎乐观，做好准备迎接挑战', score: 3 },
              { label: 'C', text: '充满担忧，怕发生不好的事', score: 2 },
              { label: 'D', text: '毫无希望，觉得未来一片黑暗', score: 1 }
            ]
          },
          {
            id: 4,
            question: '朋友取得成功，你会？',
            options: [
              { label: 'A', text: '真心为他高兴，相信自己也能行', score: 4 },
              { label: 'B', text: '祝贺他，并向他学习', score: 3 },
              { label: 'C', text: '有点嫉妒，觉得自己不如他', score: 2 },
              { label: 'D', text: '觉得他只是运气好', score: 1 }
            ]
          },
          {
            id: 5,
            question: '早上一觉醒来，你的心情通常是？',
            options: [
              { label: 'A', text: '充满活力，期待新的一天', score: 4 },
              { label: 'B', text: '平静，按部就班开始一天', score: 3 },
              { label: 'C', text: '有点焦虑，不想起床', score: 2 },
              { label: 'D', text: '心情低落，觉得没意思', score: 1 }
            ]
          }
        ],
        scoring: {
          ranges: [
            {
              min: 16,
              max: 20,
              level: '阳光乐观型',
              title: '你是阳光乐观型',
              content:
                '你内心充满阳光，总能看到事物积极的一面。这种心态让你在面对困难时更有韧性，也能感染身边的人。继续保持这份乐观，它是你宝贵的财富。'
            },
            {
              min: 11,
              max: 15,
              level: '现实乐观型',
              title: '你是现实乐观型',
              content:
                '你保持着理性的乐观，既对未来抱有希望，又能脚踏实地面对现实。这种心态让你在追求梦想的路上走得更稳。'
            },
            {
              min: 5,
              max: 10,
              level: '忧虑悲观型',
              title: '你是忧虑悲观型',
              content:
                '你习惯关注事物的负面，容易陷入焦虑和担忧。虽然这让你对风险更敏感，但也容易让你错失快乐。建议多记录生活中的小确幸，练习感恩，培养积极心态。'
            }
          ]
        }
      },
      {
        id: 'personality_4',
        title: '你是否具有较强的责任心？',
        questions: [
          {
            id: 1,
            question: '答应别人的事，你会？',
            options: [
              { label: 'A', text: '全力以赴，一定按时完成', score: 4 },
              { label: 'B', text: '尽力去做，尽量不拖延', score: 3 },
              { label: 'C', text: '看情况，有时候会忘', score: 2 },
              { label: 'D', text: '经常食言，觉得无所谓', score: 1 }
            ]
          },
          {
            id: 2,
            question: '工作中犯了错，你会？',
            options: [
              { label: 'A', text: '主动承认，承担后果并补救', score: 4 },
              { label: 'B', text: '承认错误，听从领导安排', score: 3 },
              { label: 'C', text: '找借口推卸责任', score: 2 },
              { label: 'D', text: '隐瞒不报，装作不知道', score: 1 }
            ]
          },
          {
            id: 3,
            question: '团队合作中，你会？',
            options: [
              { label: 'A', text: '主动承担更多任务，帮助队友', score: 4 },
              { label: 'B', text: '做好分内之事，不拖后腿', score: 3 },
              { label: 'C', text: '能少做就少做，依赖别人', score: 2 },
              { label: 'D', text: '经常掉链子，影响团队进度', score: 1 }
            ]
          },
          {
            id: 4,
            question: '看到公共场所的垃圾，你会？',
            options: [
              { label: 'A', text: '主动捡起来扔进垃圾桶', score: 4 },
              { label: 'B', text: '如果顺手会扔掉', score: 3 },
              { label: 'C', text: '视而不见，觉得不关我事', score: 2 },
              { label: 'D', text: '随手乱扔垃圾', score: 1 }
            ]
          },
          {
            id: 5,
            question: '对待自己的承诺，你看重吗？',
            options: [
              { label: 'A', text: '一诺千金，绝不违背', score: 4 },
              { label: 'B', text: '比较看重，尽量遵守', score: 3 },
              { label: 'C', text: '不太看重，随口说说', score: 2 },
              { label: 'D', text: '完全不当回事', score: 1 }
            ]
          }
        ],
        scoring: {
          ranges: [
            {
              min: 16,
              max: 20,
              level: '极强责任感',
              title: '你的责任心极强',
              content:
                '你是一个非常靠谱的人，凡事有交代，件件有着落。无论是工作还是生活，你都值得信赖。这种品质会让你赢得他人的尊重和信任。'
            },
            {
              min: 11,
              max: 15,
              level: '较强责任感',
              title: '你的责任心较强',
              content:
                '你具备良好的责任感，能做好分内之事，对自己的行为负责。在大多数情况下，你是一个值得信赖的伙伴。'
            },
            {
              min: 5,
              max: 10,
              level: '责任感待提升',
              title: '你的责任心有待提升',
              content:
                '你有时会忽略自己的责任，容易找借口或推卸。这可能会影响你的人际关系和职业发展。建议从小事做起，信守承诺，勇于承担，培养责任感。'
            }
          ]
        }
      }
    ]
  },
  career: {
    id: 'career',
    name: '事业维度',
    description: '评估你的抗压能力、领导潜质、职业规划和创新能力',
    tests: [
      {
        id: 'career_1',
        title: '你在工作中的抗压能力如何？',
        questions: [
          {
            id: 1,
            question: '同时接到3项紧急工作，你会？',
            options: [
              {
                label: 'A',
                text: '冷静排序，合理分配时间，高效完成',
                score: 4
              },
              {
                label: 'B',
                text: '先做重要的，遇到问题再求助同事',
                score: 3
              },
              {
                label: 'C',
                text: '有点慌乱，手忙脚乱地开始做',
                score: 2
              },
              {
                label: 'D',
                text: '直接崩溃，不知道从何下手',
                score: 1
              }
            ]
          },
          {
            id: 2,
            question: '连续一周加班到深夜，你会？',
            options: [
              {
                label: 'A',
                text: '调整心态，高效工作，抽空补觉',
                score: 4
              },
              {
                label: 'B',
                text: '坚持完成工作，周末好好休息',
                score: 3
              },
              {
                label: 'C',
                text: '身心疲惫，工作效率下降',
                score: 2
              },
              {
                label: 'D',
                text: '抱怨不断，甚至想辞职',
                score: 1
              }
            ]
          },
          {
            id: 3,
            question: '领导对你的工作成果多次提出修改意见，你会？',
            options: [
              {
                label: 'A',
                text: '认真听取意见，反复修改直到满意',
                score: 4
              },
              {
                label: 'B',
                text: '按意见修改，但会提出自己的想法',
                score: 3
              },
              {
                label: 'C',
                text: '有点不耐烦，但还是会修改',
                score: 2
              },
              {
                label: 'D',
                text: '觉得领导故意刁难，拒绝修改',
                score: 1
              }
            ]
          },
          {
            id: 4,
            question: '工作中出现重大失误，可能影响公司利益，你会？',
            options: [
              {
                label: 'A',
                text: '立刻上报并提出补救方案，承担责任',
                score: 4
              },
              {
                label: 'B',
                text: '尝试自己补救，补救不了再上报',
                score: 3
              },
              {
                label: 'C',
                text: '恐慌不安，不知道该怎么办',
                score: 2
              },
              {
                label: 'D',
                text: '想办法隐瞒，怕被处罚',
                score: 1
              }
            ]
          },
          {
            id: 5,
            question: '新接手的工作完全没接触过，你会？',
            options: [
              {
                label: 'A',
                text: '主动查资料、请教同事，快速掌握方法',
                score: 4
              },
              {
                label: 'B',
                text: '跟着同事学，慢慢摸索',
                score: 3
              },
              {
                label: 'C',
                text: '觉得困难，拖延着不开始',
                score: 2
              },
              {
                label: 'D',
                text: '直接拒绝接手，说自己不会',
                score: 1
              }
            ]
          }
        ],
        scoring: {
          ranges: [
            {
              min: 16,
              max: 20,
              level: '超强抗压型',
              title: '你的工作抗压能力超强',
              content:
                '你是工作中的"抗压强者"，面对高强度压力能游刃有余。同时接到3项紧急工作时能冷静排序高效完成，连续加班也能调整心态，领导多次提修改意见也能认真完善。遇到没接触过的工作时，你会主动学习快速掌握方法，出现失误会主动承担并补救。这种抗压能力让你能胜任高强度、高挑战的工作，是晋升的潜力股。但要注意，长期高强度工作可能会损害健康，建议合理安排休息，学会"高效工作而不是过度加班"。'
            },
            {
              min: 11,
              max: 15,
              level: '良好抗压型',
              title: '你的工作抗压能力良好',
              content:
                '你具备应对常规工作压力的能力，能在压力下完成基本任务。同时接到多项紧急工作时会先做重要的，连续加班能坚持完成，领导提修改意见会按要求修改。遇到没接触过的工作时，会跟着同事学习摸索。这种抗压能力能满足大多数工作场景的需求，但在面对超出预期的突发压力时，会出现慌乱或效率下降的情况。建议平时多积累应对突发情况的经验，比如提前做好工作预案，提升应急处理能力。'
            },
            {
              min: 5,
              max: 10,
              level: '弱抗压型',
              title: '你的工作抗压能力需要提升',
              content:
                '你在工作中抗压能力较弱，面对压力容易崩溃或逃避。同时接到多项紧急工作时会手忙脚乱，连续加班会抱怨不断，领导提修改意见会不耐烦，遇到没接触过的工作会直接拒绝。这种状态会让你难以胜任有挑战的工作，也会影响职业发展。建议从调整心态开始，把压力分解为"可解决的小任务"，比如"同时接3项工作时，先列清单排序，一项项完成"，逐步提升抗压能力。'
            }
          ]
        }
      },
      {
        id: 'career_2',
        title: '你是否具备领导潜质？',
        questions: [
          {
            id: 1,
            question: '团队遇到分歧，你会？',
            options: [
              { label: 'A', text: '主动协调，寻找共识', score: 4 },
              { label: 'B', text: '提出自己的看法，供大家参考', score: 3 },
              { label: 'C', text: '保持沉默，听从大多数人', score: 2 },
              { label: 'D', text: '觉得烦躁，不想参与', score: 1 }
            ]
          },
          {
            id: 2,
            question: '面对下属或同事的错误，你会？',
            options: [
              { label: 'A', text: '私下指出，并帮助他改正', score: 4 },
              { label: 'B', text: '直接指出错误，要求改正', score: 3 },
              { label: 'C', text: '背后议论，不当面说', score: 2 },
              { label: 'D', text: '视而不见，怕得罪人', score: 1 }
            ]
          },
          {
            id: 3,
            question: '需要做决策时，你会？',
            options: [
              { label: 'A', text: '收集信息，果断决策，并承担责任', score: 4 },
              { label: 'B', text: '犹豫不决，希望别人来定', score: 3 },
              { label: 'C', text: '拖延时间，等待事情自然解决', score: 2 },
              { label: 'D', text: '推卸责任，不想做决定', score: 1 }
            ]
          },
          {
            id: 4,
            question: '你如何看待团队目标？',
            options: [
              { label: 'A', text: '清晰明确，并能激励大家一起努力', score: 4 },
              { label: 'B', text: '知道目标，做好自己的部分', score: 3 },
              { label: 'C', text: '不太清楚，跟着大家走', score: 2 },
              { label: 'D', text: '觉得目标不切实际，消极怠工', score: 1 }
            ]
          },
          {
            id: 5,
            question: '面对困难任务，你会？',
            options: [
              { label: 'A', text: '身先士卒，带领大家攻克难关', score: 4 },
              { label: 'B', text: '尽力配合，完成分配的任务', score: 3 },
              { label: 'C', text: '抱怨任务太难，想放弃', score: 2 },
              { label: 'D', text: '找借口推脱，不想参与', score: 1 }
            ]
          }
        ],
        scoring: {
          ranges: [
            {
              min: 16,
              max: 20,
              level: '卓越领导力',
              title: '你具备卓越的领导潜质',
              content:
                '你天生具备领导者的气质，善于协调、决策和激励他人。在团队中，你总能发挥核心作用，带领大家共同进步。建议多争取管理岗位的机会，发挥你的才能。'
            },
            {
              min: 11,
              max: 15,
              level: '潜在领导力',
              title: '你具备一定的领导潜质',
              content:
                '你具备基本的领导素质，能处理好人际关系和工作任务。但在决策魄力和影响力方面还有提升空间。建议多观察优秀领导者的行为，刻意练习领导技能。'
            },
            {
              min: 5,
              max: 10,
              level: '执行型人才',
              title: '你更适合做执行者',
              content:
                '你可能更擅长执行具体的任务，而不是带领团队。这并不是坏事，优秀的执行者同样不可或缺。如果你想往管理方向发展，需要付出更多的努力去改变思维方式。'
            }
          ]
        }
      },
      {
        id: 'career_3',
        title: '你对职业发展的规划清晰度如何？',
        questions: [
          {
            id: 1,
            question: '你清楚自己3-5年后的职业目标吗？',
            options: [
              { label: 'A', text: '非常清楚，有详细的路径规划', score: 4 },
              { label: 'B', text: '有个大概的方向，但不够具体', score: 3 },
              { label: 'C', text: '不太清楚，走一步看一步', score: 2 },
              { label: 'D', text: '完全没想过，得过且过', score: 1 }
            ]
          },
          {
            id: 2,
            question: '你会定期复盘自己的工作表现吗？',
            options: [
              { label: 'A', text: '会，每周或每月都会复盘', score: 4 },
              { label: 'B', text: '偶尔会，主要是在遇到问题时', score: 3 },
              { label: 'C', text: '很少，除非领导要求', score: 2 },
              { label: 'D', text: '从来不复盘', score: 1 }
            ]
          },
          {
            id: 3,
            question: '你会主动学习新技能吗？',
            options: [
              { label: 'A', text: '经常学习，保持竞争力', score: 4 },
              { label: 'B', text: '偶尔学习，为了解决工作问题', score: 3 },
              { label: 'C', text: '很少学习，觉得够用了', score: 2 },
              { label: 'D', text: '完全不学习，排斥新事物', score: 1 }
            ]
          },
          {
            id: 4,
            question: '面对职业瓶颈，你会？',
            options: [
              { label: 'A', text: '积极寻找突破口，或寻求导师帮助', score: 4 },
              { label: 'B', text: '尝试调整，但比较迷茫', score: 3 },
              { label: 'C', text: '焦虑不安，不知道怎么办', score: 2 },
              { label: 'D', text: '选择躺平，放弃努力', score: 1 }
            ]
          },
          {
            id: 5,
            question: '你了解所在行业的趋势吗？',
            options: [
              { label: 'A', text: '非常了解，经常关注行业动态', score: 4 },
              { label: 'B', text: '了解一些，主要通过新闻', score: 3 },
              { label: 'C', text: '不太了解，只关注眼前工作', score: 2 },
              { label: 'D', text: '完全不关心', score: 1 }
            ]
          }
        ],
        scoring: {
          ranges: [
            {
              min: 16,
              max: 20,
              level: '规划清晰型',
              title: '你的职业规划非常清晰',
              content:
                '你对自己的未来有明确的目标和路径，并且在持续行动。这种清晰感让你在职场中更有方向感和动力。继续保持，你的目标终将实现。'
            },
            {
              min: 11,
              max: 15,
              level: '方向模糊型',
              title: '你的职业规划有待明确',
              content:
                '你有个大概的方向，但在具体路径上还不够清晰。建议花点时间深入思考自己的优势和兴趣，制定更具体的行动计划。'
            },
            {
              min: 5,
              max: 10,
              level: '迷茫探索型',
              title: '你目前处于职业迷茫期',
              content:
                '你对未来缺乏规划，容易随波逐流。这可能会让你错失很多发展机会。建议寻找职业导师或进行职业咨询，帮助自己理清思路。'
            }
          ]
        }
      },
      {
        id: 'career_4',
        title: '你在工作中的创新能力怎么样？',
        questions: [
          {
            id: 1,
            question: '面对重复性工作，你会？',
            options: [
              { label: 'A', text: '思考优化流程，提高效率', score: 4 },
              { label: 'B', text: '按部就班完成，不出错就行', score: 3 },
              { label: 'C', text: '觉得枯燥，敷衍了事', score: 2 },
              { label: 'D', text: '抱怨工作无聊', score: 1 }
            ]
          },
          {
            id: 2,
            question: '遇到难题时，你会？',
            options: [
              { label: 'A', text: '尝试多种新方法解决', score: 4 },
              { label: 'B', text: '沿用老办法，或者请教同事', score: 3 },
              { label: 'C', text: '束手无策，等待指示', score: 2 },
              { label: 'D', text: '直接放弃', score: 1 }
            ]
          },
          {
            id: 3,
            question: '你会提出新的点子吗？',
            options: [
              { label: 'A', text: '经常提出，并尝试落地', score: 4 },
              { label: 'B', text: '偶尔提出，但不敢尝试', score: 3 },
              { label: 'C', text: '很少提出，怕被否定', score: 2 },
              { label: 'D', text: '从来不提，觉得没用', score: 1 }
            ]
          },
          {
            id: 4,
            question: '你对新技术的态度是？',
            options: [
              { label: 'A', text: '充满好奇，主动尝试应用', score: 4 },
              { label: 'B', text: '观望态度，别人用了再说', score: 3 },
              { label: 'C', text: '比较排斥，觉得麻烦', score: 2 },
              { label: 'D', text: '完全拒绝，坚持旧习惯', score: 1 }
            ]
          },
          {
            id: 5,
            question: '你喜欢挑战常规吗？',
            options: [
              { label: 'A', text: '喜欢，觉得常规就是用来打破的', score: 4 },
              { label: 'B', text: '偶尔，在风险可控的情况下', score: 3 },
              { label: 'C', text: '不喜欢，觉得安全第一', score: 2 },
              { label: 'D', text: '非常讨厌，墨守成规', score: 1 }
            ]
          }
        ],
        scoring: {
          ranges: [
            {
              min: 16,
              max: 20,
              level: '创新先锋',
              title: '你是创新先锋',
              content:
                '你思维活跃，敢于尝试新事物，善于解决复杂问题。在工作中，你总是能带来惊喜。这种创新能力是你核心竞争力的重要组成部分。'
            },
            {
              min: 11,
              max: 15,
              level: '稳中求变',
              title: '你具备一定的创新意识',
              content:
                '你愿意接受新事物，但在行动上比较谨慎。建议在风险可控的范围内，多尝试一些微创新，逐步提升自信心。'
            },
            {
              min: 5,
              max: 10,
              level: '守成型',
              title: '你偏向于守成',
              content:
                '你习惯于按部就班，对变化比较抗拒。虽然这能保证工作的稳定性，但在快速变化的时代，可能会面临被淘汰的风险。建议保持开放心态，尝试接触新事物。'
            }
          ]
        }
      }
    ]
  },
  family: {
    id: 'family',
    name: '家庭维度',
    description: '评估你的家庭沟通能力、责任承担、幸福感营造和边界处理能力',
    tests: [
      {
        id: 'family_1',
        title: '你在家庭中的沟通协调能力如何？',
        questions: [
          {
            id: 1,
            question: '夫妻之间因为育儿观念不同吵架，你会？',
            options: [
              {
                label: 'A',
                text: '冷静后一起查资料，结合孩子情况达成共识',
                score: 4
              },
              {
                label: 'B',
                text: '听取对方的理由，再表达自己的想法',
                score: 3
              },
              {
                label: 'C',
                text: '坚持自己的观念，不接受对方的想法',
                score: 2
              },
              {
                label: 'D',
                text: '冷战不说话，让对方妥协',
                score: 1
              }
            ]
          },
          {
            id: 2,
            question: '父母对你的工作选择不满意，你会？',
            options: [
              {
                label: 'A',
                text: '耐心解释工作的前景和自己的规划，争取理解',
                score: 4
              },
              {
                label: 'B',
                text: '简单说明原因，希望父母能接受',
                score: 3
              },
              {
                label: 'C',
                text: '觉得父母不懂，不和他们沟通',
                score: 2
              },
              {
                label: 'D',
                text: '为了让父母开心，放弃自己的选择',
                score: 1
              }
            ]
          },
          {
            id: 3,
            question: '兄弟姐妹因为家产分配产生矛盾，你会？',
            options: [
              {
                label: 'A',
                text: '主动牵头协商，提出公平的分配方案',
                score: 4
              },
              {
                label: 'B',
                text: '表达自己的诉求，也尊重别人的想法',
                score: 3
              },
              {
                label: 'C',
                text: '只关心自己的利益，不管别人',
                score: 2
              },
              {
                label: 'D',
                text: '躲起来不参与，让父母解决',
                score: 1
              }
            ]
          },
          {
            id: 4,
            question: '孩子考试作弊被老师批评，你会怎么和孩子沟通？',
            options: [
              {
                label: 'A',
                text: '先了解孩子作弊的原因，再教育他诚信的重要性',
                score: 4
              },
              {
                label: 'B',
                text: '批评孩子的行为，要求他下次改正',
                score: 3
              },
              {
                label: 'C',
                text: '打骂孩子，让他记住教训',
                score: 2
              },
              {
                label: 'D',
                text: '觉得老师小题大做，帮孩子辩解',
                score: 1
              }
            ]
          },
          {
            id: 5,
            question: '和公婆/岳父母生活习惯不同产生矛盾，你会？',
            options: [
              {
                label: 'A',
                text: '主动沟通，互相迁就，制定共同的生活规则',
                score: 4
              },
              {
                label: 'B',
                text: '自己多忍让，避免矛盾升级',
                score: 3
              },
              {
                label: 'C',
                text: '抱怨他们的习惯，让伴侣去说',
                score: 2
              },
              {
                label: 'D',
                text: '要求他们改变习惯，不然就分开住',
                score: 1
              }
            ]
          }
        ],
        scoring: {
          ranges: [
            {
              min: 16,
              max: 20,
              level: '高效沟通型',
              title: '你的家庭沟通能力优秀',
              content:
                '你是家庭中的"沟通桥梁"，能轻松化解家庭矛盾。夫妻育儿观念不同时会一起查资料达成共识，父母不理解工作选择时会耐心解释，兄弟姐妹分家产有矛盾时会牵头协商，孩子犯错时会理性教育，和长辈生活习惯不同时会主动沟通制定规则。这种沟通能力让你的家庭氛围和谐，很少有积累的矛盾。建议继续保持这种沟通模式，同时多组织家庭会议，让每个家庭成员都有表达想法的机会，进一步提升家庭凝聚力。'
            },
            {
              min: 11,
              max: 15,
              level: '良好沟通型',
              title: '你的家庭沟通能力良好',
              content:
                '你具备基本的家庭沟通能力，能处理常见的家庭矛盾。夫妻育儿观念不同时会听取对方意见，父母不理解工作时会简单解释，兄弟姐妹有矛盾时会表达自己的立场，孩子犯错时会批评教育，和长辈有习惯差异时会自己忍让。这种沟通能力能维持家庭的基本和谐，但在处理复杂矛盾时，容易出现沟通不深入或妥协过度的情况。建议在面对复杂矛盾时，提前梳理自己的核心诉求和对方的潜在需求，沟通时更有针对性。'
            },
            {
              min: 5,
              max: 10,
              level: '沟通薄弱型',
              title: '你的家庭沟通能力需要提升',
              content:
                '你不擅长家庭沟通，遇到矛盾时习惯逃避或强硬对抗。夫妻育儿观念不同时会坚持己见或冷战，父母不理解工作时会争吵或放弃沟通，兄弟姐妹有矛盾时会只考虑自己或躲起来，孩子犯错时会打骂或包庇，和长辈有习惯差异时会抱怨或要求对方改变。这种沟通方式会让家庭矛盾不断积累，影响家庭氛围。建议下次遇到矛盾时，先深呼吸冷静，避免情绪化表达，试着说"我理解你的想法，我是这么认为的..."，逐步学会理性沟通。'
            }
          ]
        }
      },
      {
        id: 'family_2',
        title: '你对家庭责任的承担程度如何？',
        questions: [
          {
            id: 1,
            question: '家务分配上，你会？',
            options: [
              { label: 'A', text: '主动承担大部分家务', score: 4 },
              { label: 'B', text: '和伴侣平分家务', score: 3 },
              { label: 'C', text: '只做自己喜欢做的', score: 2 },
              { label: 'D', text: '完全不做，等着别人伺候', score: 1 }
            ]
          },
          {
            id: 2,
            question: '家人生病时，你会？',
            options: [
              { label: 'A', text: '悉心照料，全程陪护', score: 4 },
              { label: 'B', text: '尽力照顾，同时兼顾工作', score: 3 },
              { label: 'C', text: '偶尔探望，主要靠别人照顾', score: 2 },
              { label: 'D', text: '觉得麻烦，躲得远远的', score: 1 }
            ]
          },
          {
            id: 3,
            question: '家庭遇到经济困难，你会？',
            options: [
              { label: 'A', text: '主动想办法开源节流，共渡难关', score: 4 },
              { label: 'B', text: '配合家庭缩减开支', score: 3 },
              { label: 'C', text: '抱怨生活质量下降', score: 2 },
              { label: 'D', text: '只顾自己享乐，不管家里死活', score: 1 }
            ]
          },
          {
            id: 4,
            question: '对待孩子的教育，你会？',
            options: [
              { label: 'A', text: '投入大量时间和精力陪伴引导', score: 4 },
              { label: 'B', text: '关注学习成绩，偶尔辅导', score: 3 },
              { label: 'C', text: '交给伴侣或老人管', score: 2 },
              { label: 'D', text: '完全不管，觉得是学校的事', score: 1 }
            ]
          },
          {
            id: 5,
            question: '周末时间，你会？',
            options: [
              { label: 'A', text: '主要陪伴家人，组织家庭活动', score: 4 },
              { label: 'B', text: '一半时间陪家人，一半时间自己玩', score: 3 },
              { label: 'C', text: '主要和朋友聚会，很少陪家人', score: 2 },
              { label: 'D', text: '完全沉浸在自己的世界里', score: 1 }
            ]
          }
        ],
        scoring: {
          ranges: [
            {
              min: 16,
              max: 20,
              level: '家庭支柱',
              title: '你是家庭的中流砥柱',
              content:
                '你对家庭有着极强的责任感，愿意为家人付出一切。无论是家务、经济还是情感支持，你都做得非常出色。你是家人最坚实的依靠。'
            },
            {
              min: 11,
              max: 15,
              level: '责任共担',
              title: '你是一个负责任的家庭成员',
              content:
                '你愿意承担属于自己的家庭责任，与家人共同分担生活的酸甜苦辣。这种平等的态度有助于建立健康的家庭关系。'
            },
            {
              min: 5,
              max: 10,
              level: '责任缺失',
              title: '你的家庭责任感有待加强',
              content:
                '你可能习惯了被照顾，对家庭责任的承担较少。这可能会让你的家人感到疲惫。建议多关注家人的需求，主动分担一些力所能及的事务。'
            }
          ]
        }
      },
      {
        id: 'family_3',
        title: '你营造家庭幸福感的能力如何？',
        questions: [
          {
            id: 1,
            question: '你会记得家人的生日和纪念日吗？',
            options: [
              { label: 'A', text: '牢记在心，并精心准备惊喜', score: 4 },
              { label: 'B', text: '记得，会送礼物或发红包', score: 3 },
              { label: 'C', text: '偶尔记得，经常需要提醒', score: 2 },
              { label: 'D', text: '从来不记，觉得没必要', score: 1 }
            ]
          },
          {
            id: 2,
            question: '回家进门的第一件事，你会？',
            options: [
              { label: 'A', text: '笑着和家人打招呼，拥抱一下', score: 4 },
              { label: 'B', text: '说声"我回来了"', score: 3 },
              { label: 'C', text: '默默换鞋，不说话', score: 2 },
              { label: 'D', text: '把坏情绪带回家，板着脸', score: 1 }
            ]
          },
          {
            id: 3,
            question: '家人做了一桌菜，你会？',
            options: [
              { label: 'A', text: '赞不绝口，感谢家人的付出', score: 4 },
              { label: 'B', text: '边吃边聊，气氛融洽', score: 3 },
              { label: 'C', text: '挑三拣四，嫌这嫌那', score: 2 },
              { label: 'D', text: '只顾玩手机，不理家人', score: 1 }
            ]
          },
          {
            id: 4,
            question: '你会和家人分享生活中的趣事吗？',
            options: [
              { label: 'A', text: '经常分享，逗家人开心', score: 4 },
              { label: 'B', text: '偶尔分享一些重要的事', score: 3 },
              { label: 'C', text: '很少分享，觉得他们不懂', score: 2 },
              { label: 'D', text: '从来不分享，回家就沉默', score: 1 }
            ]
          },
          {
            id: 5,
            question: '家庭氛围紧张时，你会？',
            options: [
              { label: 'A', text: '幽默化解，调节气氛', score: 4 },
              { label: 'B', text: '保持冷静，避免冲突升级', score: 3 },
              { label: 'C', text: '火上浇油，大吵一架', score: 2 },
              { label: 'D', text: '摔门而去，逃避问题', score: 1 }
            ]
          }
        ],
        scoring: {
          ranges: [
            {
              min: 16,
              max: 20,
              level: '幸福制造机',
              title: '你是家庭的幸福制造机',
              content:
                '你懂得生活的仪式感，善于发现和创造快乐。你的存在让家庭充满了欢声笑语和温暖。继续保持，你的快乐感染力是家庭最宝贵的财富。'
            },
            {
              min: 11,
              max: 15,
              level: '温馨守护者',
              title: '你善于维护家庭温馨',
              content:
                '你注重家庭氛围，愿意为家人的快乐付出努力。虽然可能不会制造大惊喜，但你的陪伴和关怀让家人感到踏实温暖。'
            },
            {
              min: 5,
              max: 10,
              level: '氛围破坏者',
              title: '你需要提升营造幸福感的能力',
              content:
                '你可能不太懂得表达爱，或者习惯了把负面情绪带回家。这可能会让家庭氛围变得压抑。建议多给家人一些微笑和赞美，学会把烦恼关在门外。'
            }
          ]
        }
      },
      {
        id: 'family_4',
        title: '你处理家庭边界感的能力如何？',
        questions: [
          {
            id: 1,
            question: '父母过度干涉你的生活，你会？',
            options: [
              { label: 'A', text: '温和而坚定地表明立场，设立界限', score: 4 },
              { label: 'B', text: '表面答应，背后按自己意愿做', score: 3 },
              { label: 'C', text: '激烈反抗，大吵一架', score: 2 },
              { label: 'D', text: '完全顺从，放弃自我', score: 1 }
            ]
          },
          {
            id: 2,
            question: '亲戚向你借钱，你会？',
            options: [
              { label: 'A', text: '根据自身情况和亲疏关系理性决定', score: 4 },
              { label: 'B', text: '不好意思拒绝，勉强借出', score: 3 },
              { label: 'C', text: '直接拒绝，不留情面', score: 2 },
              { label: 'D', text: '为了面子，打肿脸充胖子', score: 1 }
            ]
          },
          {
            id: 3,
            question: '伴侣翻看你的手机，你会？',
            options: [
              {
                label: 'A',
                text: '坦然沟通，建立互信，但也保留隐私',
                score: 4
              },
              { label: 'B', text: '虽然不爽，但还是给看', score: 3 },
              { label: 'C', text: '非常生气，觉得被侵犯隐私', score: 2 },
              { label: 'D', text: '设密码防着，坚决不给看', score: 1 }
            ]
          },
          {
            id: 4,
            question: '你会干涉伴侣的社交圈吗？',
            options: [
              { label: 'A', text: '尊重对方的社交自由，信任对方', score: 4 },
              { label: 'B', text: '偶尔过问，了解一下', score: 3 },
              { label: 'C', text: '经常查岗，限制对方交友', score: 2 },
              { label: 'D', text: '完全控制，不许对方有异性朋友', score: 1 }
            ]
          },
          {
            id: 5,
            question: '对于孩子的隐私，你会？',
            options: [
              { label: 'A', text: '尊重孩子的隐私，进房间先敲门', score: 4 },
              { label: 'B', text: '觉得孩子还小，不需要太多隐私', score: 3 },
              { label: 'C', text: '偷看孩子日记，翻孩子书包', score: 2 },
              { label: 'D', text: '完全监控孩子的一举一动', score: 1 }
            ]
          }
        ],
        scoring: {
          ranges: [
            {
              min: 16,
              max: 20,
              level: '边界清晰',
              title: '你的边界感非常清晰',
              content:
                '你懂得尊重自己和他人的界限，既能保持亲密关系，又能维护独立人格。这种健康的边界感让你的家庭关系更加稳固和长久。'
            },
            {
              min: 11,
              max: 15,
              level: '边界模糊',
              title: '你的边界感有时会模糊',
              content:
                '你在大多数情况下能处理好边界，但在面对亲近的人时，容易妥协或越界。建议在坚持原则的同时，学会用更温和的方式表达拒绝。'
            },
            {
              min: 5,
              max: 10,
              level: '边界缺失',
              title: '你的边界感严重缺失',
              content:
                '你可能习惯了依附或控制，缺乏独立的自我。这容易导致家庭关系纠缠不清，矛盾频发。建议建立自我意识，学会说"不"，也学会尊重别人的"不"。'
            }
          ]
        }
      }
    ]
  },
  interest: {
    id: 'interest',
    name: '趣味维度',
    description: '评估你的生活趣味偏好、吃货属性、旅行风格和宠物偏好',
    tests: [
      {
        id: 'interest_1',
        title: '你的生活趣味偏好是哪类？',
        questions: [
          {
            id: 1,
            question: '周末空闲时，你最想做什么？',
            options: [
              {
                label: 'A',
                text: '去画室画画、陶艺馆做手工',
                score: 4
              },
              {
                label: 'B',
                text: '去户外徒步、露营、爬山',
                score: 3
              },
              {
                label: 'C',
                text: '在家做烘焙、研究新菜谱',
                score: 2
              },
              {
                label: 'D',
                text: '窝在沙发上玩游戏、看动漫',
                score: 1
              }
            ]
          },
          {
            id: 2,
            question: '朋友约你聚会，你更倾向于哪种形式？',
            options: [
              {
                label: 'A',
                text: '去脱口秀现场、话剧演出',
                score: 4
              },
              {
                label: 'B',
                text: '去KTV唱歌、桌游吧玩游戏',
                score: 3
              },
              {
                label: 'C',
                text: '去茶馆品茶、聊聊天',
                score: 2
              },
              {
                label: 'D',
                text: '去夜市逛吃、打卡网红小吃',
                score: 1
              }
            ]
          },
          {
            id: 3,
            question: '你会通过什么方式缓解压力？',
            options: [
              {
                label: 'A',
                text: '写日记、拍vlog记录生活',
                score: 4
              },
              {
                label: 'B',
                text: '去健身房健身、打羽毛球',
                score: 3
              },
              {
                label: 'C',
                text: '养花草、撸猫撸狗',
                score: 2
              },
              {
                label: 'D',
                text: '看喜剧电影、刷搞笑短视频',
                score: 1
              }
            ]
          },
          {
            id: 4,
            question: '你喜欢哪种类型的礼物？',
            options: [
              {
                label: 'A',
                text: '定制手工艺品、艺术画作',
                score: 4
              },
              {
                label: 'B',
                text: '运动装备、户外用品',
                score: 3
              },
              {
                label: 'C',
                text: '高颜值餐具、香薰蜡烛',
                score: 2
              },
              {
                label: 'D',
                text: '游戏周边、动漫手办',
                score: 1
              }
            ]
          },
          {
            id: 5,
            question: '你手机里最常刷的APP类型是？',
            options: [
              {
                label: 'A',
                text: '艺术赏析、摄影类APP',
                score: 4
              },
              {
                label: 'B',
                text: '运动健身、户外攻略类APP',
                score: 3
              },
              {
                label: 'C',
                text: '美食菜谱、园艺类APP',
                score: 2
              },
              {
                label: 'D',
                text: '游戏、动漫资讯类APP',
                score: 1
              }
            ]
          }
        ],
        scoring: {
          ranges: [
            {
              min: 16,
              max: 20,
              level: '艺术创作型',
              title: '你是生活艺术家',
              content:
                '你是天生的"生活艺术家"，对美有着敏锐的感知和创造欲。画画、手工等创作活动能让你获得极大的满足感，喜欢通过艺术形式表达自我，关注生活中的美学细节。这种趣味偏好让你的生活充满格调，建议可以尝试将创作融入日常，比如装饰家居、制作手作礼物，让艺术感渗透生活方方面面。'
            },
            {
              min: 11,
              max: 15,
              level: '户外活力型',
              title: '你是户外活力派',
              content:
                '你是"大自然的孩子"，热爱户外的自由与活力。徒步、露营等活动能让你释放压力、充实体力，喜欢在运动中感受身体的能量，对户外攻略和运动装备充满兴趣。这种偏好让你精力充沛，建议可以组建户外小队，定期开展活动，同时注意户外安全，做好防护措施。'
            },
            {
              min: 5,
              max: 10,
              level: '生活美学型',
              title: '你是生活美学家',
              content:
                '你是"生活的经营者"，擅长在柴米油盐中创造美好。烘焙、园艺等活动能让你感受到生活的烟火气与治愈感，注重家居环境的舒适与美观，喜欢通过打理生活细节获得幸福感。建议可以打造专属的"生活美学角"，比如阳台花园、厨房烘焙区，让兴趣有固定的承载空间。'
            }
          ]
        }
      },
      {
        id: 'interest_2',
        title: '你的吃货属性有多强？',
        questions: [
          {
            id: 1,
            question: '为了吃到网红美食，你愿意排队多久？',
            options: [
              { label: 'A', text: '只要好吃，多久都愿意', score: 4 },
              { label: 'B', text: '1小时以内可以接受', score: 3 },
              { label: 'C', text: '超过20分钟就算了', score: 2 },
              { label: 'D', text: '绝不排队，换一家吃', score: 1 }
            ]
          },
          {
            id: 2,
            question: '去外地旅游，你最关注的是？',
            options: [
              { label: 'A', text: '当地特色美食，做好攻略', score: 4 },
              { label: 'B', text: '景点和美食都关注', score: 3 },
              { label: 'C', text: '主要看景点，吃什么无所谓', score: 2 },
              { label: 'D', text: '随便吃点，填饱肚子就行', score: 1 }
            ]
          },
          {
            id: 3,
            question: '你会自己动手做美食吗？',
            options: [
              { label: 'A', text: '经常做，喜欢研究新菜式', score: 4 },
              { label: 'B', text: '偶尔做，主要做家常菜', score: 3 },
              { label: 'C', text: '很少做，主要靠外卖', score: 2 },
              { label: 'D', text: '完全不会做，只会煮泡面', score: 1 }
            ]
          },
          {
            id: 4,
            question: '吃到好吃的东西，你会？',
            options: [
              { label: 'A', text: '拍照发朋友圈，推荐给朋友', score: 4 },
              { label: 'B', text: '记在心里，下次再来', score: 3 },
              { label: 'C', text: '觉得不错，仅此而已', score: 2 },
              { label: 'D', text: '没什么感觉，就是食物', score: 1 }
            ]
          },
          {
            id: 5,
            question: '你对食物的口味挑剔吗？',
            options: [
              { label: 'A', text: '非常挑剔，追求极致口感', score: 4 },
              { label: 'B', text: '比较讲究，注重食材新鲜', score: 3 },
              { label: 'C', text: '不挑食，什么都吃', score: 2 },
              { label: 'D', text: '只要能吃就行', score: 1 }
            ]
          }
        ],
        scoring: {
          ranges: [
            {
              min: 16,
              max: 20,
              level: '顶级老饕',
              title: '你是顶级美食家',
              content:
                '你对美食有着极致的追求，愿意为了美味付出时间和精力。你的味蕾非常敏感，能品尝出食物的细微差别。美食是你生活中不可或缺的一部分。'
            },
            {
              min: 11,
              max: 15,
              level: '资深吃货',
              title: '你是资深吃货',
              content:
                '你热爱美食，喜欢尝试各种新口味。虽然没有那么挑剔，但对吃也有自己的要求。美食能给你带来极大的快乐。'
            },
            {
              min: 5,
              max: 10,
              level: '普通食客',
              title: '你对吃比较随意',
              content:
                '你把食物看作是维持生命的能量来源，对口味没有太高要求。虽然这让你比较好养活，但也可能错失了一些舌尖上的乐趣。'
            }
          ]
        }
      },
      {
        id: 'interest_3',
        title: '你的旅行风格是什么样的？',
        questions: [
          {
            id: 1,
            question: '旅行前，你会做攻略吗？',
            options: [
              { label: 'A', text: '做非常详细的攻略，精确到分钟', score: 4 },
              { label: 'B', text: '做大概的行程安排，留有弹性', score: 3 },
              { label: 'C', text: '只定机票酒店，到了再说', score: 2 },
              { label: 'D', text: '完全不做攻略，说走就走', score: 1 }
            ]
          },
          {
            id: 2,
            question: '旅行中，你更喜欢？',
            options: [
              { label: 'A', text: '打卡热门景点，拍照留念', score: 4 },
              { label: 'B', text: '深入当地生活，体验风土人情', score: 3 },
              { label: 'C', text: '找个舒服的酒店躺着', score: 2 },
              { label: 'D', text: '漫无目的地闲逛', score: 1 }
            ]
          },
          {
            id: 3,
            question: '你会选择什么样的住宿？',
            options: [
              { label: 'A', text: '高档酒店，享受服务', score: 4 },
              { label: 'B', text: '特色民宿，体验当地风情', score: 3 },
              { label: 'C', text: '经济型酒店，干净就行', score: 2 },
              { label: 'D', text: '青年旅舍，结交朋友', score: 1 }
            ]
          },
          {
            id: 4,
            question: '旅行中遇到突发状况，你会？',
            options: [
              { label: 'A', text: '冷静处理，迅速调整计划', score: 4 },
              { label: 'B', text: '有点慌乱，但能解决', score: 3 },
              { label: 'C', text: '心情受影响，抱怨连连', score: 2 },
              { label: 'D', text: '不知所措，想回家', score: 1 }
            ]
          },
          {
            id: 5,
            question: '旅行结束后，你会？',
            options: [
              { label: 'A', text: '整理照片，写游记分享', score: 4 },
              { label: 'B', text: '发几张朋友圈纪念一下', score: 3 },
              { label: 'C', text: '休息几天，恢复体力', score: 2 },
              { label: 'D', text: '立刻投入工作，忘记旅行', score: 1 }
            ]
          }
        ],
        scoring: {
          ranges: [
            {
              min: 16,
              max: 20,
              level: '规划达人',
              title: '你是旅行规划达人',
              content:
                '你喜欢掌控一切的感觉，旅行对你来说是一次完美的执行。你能高效利用时间，打卡所有想去的地方。但有时也要学会享受意外的惊喜。'
            },
            {
              min: 11,
              max: 15,
              level: '体验派',
              title: '你是深度体验派',
              content:
                '你更注重旅行的体验和感受，喜欢融入当地生活。这种旅行方式让你能获得更深刻的感悟。'
            },
            {
              min: 5,
              max: 10,
              level: '随性派',
              title: '你是随性自由派',
              content:
                '你喜欢无拘无束的旅行，走到哪算哪。这种自由让你感到放松，但也可能因为缺乏规划而错过一些精彩。'
            }
          ]
        }
      },
      {
        id: 'interest_4',
        title: '你的宠物偏好暴露了什么？',
        questions: [
          {
            id: 1,
            question: '如果养宠物，你首选？',
            options: [
              { label: 'A', text: '狗狗，忠诚粘人', score: 4 },
              { label: 'B', text: '猫咪，独立高冷', score: 3 },
              { label: 'C', text: '仓鼠、兔子等小宠', score: 2 },
              { label: 'D', text: '爬宠、鱼类等观赏宠', score: 1 }
            ]
          },
          {
            id: 2,
            question: '你为什么想养宠物？',
            options: [
              { label: 'A', text: '需要陪伴，排解孤独', score: 4 },
              { label: 'B', text: '觉得可爱，治愈心灵', score: 3 },
              { label: 'C', text: '培养责任感', score: 2 },
              { label: 'D', text: '跟风，觉得好玩', score: 1 }
            ]
          },
          {
            id: 3,
            question: '宠物拆家了，你会？',
            options: [
              { label: 'A', text: '耐心教育，引导改正', score: 4 },
              { label: 'B', text: '虽然生气，但还是原谅它', score: 3 },
              { label: 'C', text: '严厉惩罚，关禁闭', score: 2 },
              { label: 'D', text: '不想养了，送人', score: 1 }
            ]
          },
          {
            id: 4,
            question: '你会花多少钱在宠物身上？',
            options: [
              { label: 'A', text: '像养孩子一样，不计成本', score: 4 },
              { label: 'B', text: '在能力范围内给它最好的', score: 3 },
              { label: 'C', text: '只买基本的粮食和用品', score: 2 },
              { label: 'D', text: '越省越好，吃剩饭也行', score: 1 }
            ]
          },
          {
            id: 5,
            question: '宠物生病了，你会？',
            options: [
              { label: 'A', text: '立刻送医院，不管花多少钱', score: 4 },
              { label: 'B', text: '先观察一下，严重再去医院', score: 3 },
              { label: 'C', text: '上网查偏方自己治', score: 2 },
              { label: 'D', text: '听天由命，自愈', score: 1 }
            ]
          }
        ],
        scoring: {
          ranges: [
            {
              min: 16,
              max: 20,
              level: '爱心爆棚',
              title: '你爱心爆棚且渴望陪伴',
              content:
                '你是一个非常有爱心的人，渴望亲密关系和陪伴。你愿意为所爱付出一切，无论是对宠物还是对人。'
            },
            {
              min: 11,
              max: 15,
              level: '独立自主',
              title: '你独立且有爱心',
              content:
                '你喜欢宠物，但也保持着一定的独立性。你懂得在付出和自我之间找到平衡。'
            },
            {
              min: 5,
              max: 10,
              level: '冷静旁观',
              title: '你比较冷静理性',
              content:
                '你对宠物的感情比较淡，更多是出于观赏或娱乐。这反映出你在人际关系中也可能比较慢热或保持距离。'
            }
          ]
        }
      }
    ]
  }
}

/**
 * 根据维度ID获取维度信息
 * @param {string} dimensionId - 维度ID
 * @returns {object} 维度数据
 */
export function getDimensionById(dimensionId) {
  return dimensionsData[dimensionId]
}

/**
 * 根据测试ID获取测试数据
 * @param {string} dimensionId - 维度ID
 * @param {string} testId - 测试ID
 * @returns {object} 测试数据
 */
export function getTestById(dimensionId, testId) {
  const dimension = dimensionsData[dimensionId]
  if (!dimension) return null

  return dimension.tests.find(test => test.id === testId)
}

/**
 * 计算测试结果
 * @param {number} totalScore - 总分
 * @param {array} scoringRanges - 评分规则数组
 * @returns {object} 结果对象 {level, title, content}
 */
export function calculateTestResult(totalScore, scoringRanges) {
  for (let range of scoringRanges) {
    if (totalScore >= range.min && totalScore <= range.max) {
      return {
        level: range.level,
        title: range.title,
        content: range.content
      }
    }
  }

  // 默认返回中等水平
  return scoringRanges[Math.floor(scoringRanges.length / 2)]
}

/**
 * 获取所有维度列表
 * @returns {array} 维度列表
 */
export function getAllDimensions() {
  return Object.values(dimensionsData).map(dimension => ({
    id: dimension.id,
    name: dimension.name,
    description: dimension.description,
    testCount: dimension.tests.length
  }))
}
