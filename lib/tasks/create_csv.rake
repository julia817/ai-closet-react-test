require 'csv'

namespace :create_csv do
  desc "実行処理の説明"
  #モデルにアクセスする場合は :enviroment　を指定します
  task :export => :environment do
    #csvを生成
    csv_export = CSV.generate do |csv| 
      csv << Model.column_names
      csv << 
      Model.all.map do |model|
        model
      end
    end
    # 現在時間でダウンロードできるようにする
    current_time = DateTime.now.to_s
    # ファイル作成
    File.open("./" + current_time + "_user.csv", 'w') do |file|
      file.write(csv_export)
    end
    # ダウンロード
    stat = File::stat("./" + current_time + "_user.csv")
    send_file("./" + current_time + "_user.csv", :filename => "./" + current_time + "_user.csv", :length => stat.size)
  
end