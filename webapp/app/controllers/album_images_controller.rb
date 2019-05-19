class AlbumImagesController < ApplicationController
  before_action :set_image, only: [:destroy]

  # DELETE /album_images/1
  # DELETE /album_images/1.json
  def destroy
    @image.destroy
    render json: @image
  end

  private
  
  # Use callbacks to share common setup or constraints between actions.
  def set_image
    @image = AlbumImage.find(params[:id])
  end
end
